const Advocate = require("./../models/advocateModel");

const getAllAdvocates = async (req, res) => {
    try{
        const data = await Advocate.find({});
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
        res.status(200).json({
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

module.exports = {
    getAllAdvocates,
    getAdvocate,
    createAdvocate
}