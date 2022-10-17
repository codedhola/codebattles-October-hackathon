const Advocate = require("./../models/advocateModel");

const getAllAdvocates = async (req, res) => {
// SEARCH ALL QUERY PARAMATERS EXCEPT EXCLUDES
    const queryObj = {...req.query};
    let excludes = ["sort", "page", "limit"];
    excludes.forEach((el) => delete queryObj[el]);
    const name = req.query.name;
    
    try{
        // REGEX TO SEARCH A NAME  => {name: {$regex: new RegExp(`${name}`, 'g')}}
        let query = Advocate.find({});
        query = query
        
        const data = await query;
        res.status(200).json({
            status: "successful",
            results: data.length,
            data: data
        });
    }catch(err){
        res.status(404).json({
            status: "Failed",
            message: err
        })
    }
}

const getAdvocate = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Advocate.findById(id);
        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        res.status(400).json({
            Status: "Failed",
            message: err.message
        })
    }
}

const createAdvocate = async (req, res) => {
    const body = req.body;
    try {
        const data = await Advocate.create(body);
        res.status(201).json({
            status: "Successful",
            data: data
        });
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        });
    }
}

const updateAdvocate = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try{
        const data = await Advocate.findByIdAndUpdate(id, body, { new: true, runValidators: true});
        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

const deleteAdvocate = async (req, res) => {
    const id = req.params.id;
    try{
        await Advocate.findByIdAndDelete(id);
        res.status(204).json({
            status: null
        })
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

module.exports = {
    getAllAdvocates,
    getAdvocate,
    createAdvocate,
    updateAdvocate,
    deleteAdvocate
}