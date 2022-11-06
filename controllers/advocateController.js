const HandleError = require("../config/handleError")
const Advocate = require("./../models/advocateModel")

const getAllAdvocates = async (req, res, next) => {
// SEARCH ALL QUERY PARAMATERS EXCEPT EXCLUDES
    const queryObj = {...req.query};
    let excludes = ["sort", "page", "limit", "username"];
    excludes.forEach((el) => delete queryObj[el])
    
    try{
        let query = Advocate.find(queryObj)

        // QUERY METHODS
        if(req.query.username){
            query = query.find({userName: {$regex: new RegExp(`${req.query.username}`, 'g')}}); // QUERY USERNAME
        }
        if(req.query.sort){
            const sortby = req.query.sort.split(",").join(" ");
            query = query.sort(sortby)
        }else {
            query = query.sort("createdAt") // SORTBY -CREATEDAT
        }
        if(req.query.fields){
            let fields = req.query.fields.split(",").join(" ")
            query = query.select(fields)
        }else {
            query = query.select("-__v")
        }
        
        let page = req.query.page || 1
        let limit = req.query.limit || 15
        let skip = (page - 1) * limit

        query = query.skip(skip).limit(limit)
        
        
        const data = await query
        res.status(200).json({
            status: "successful",
            results: data.length,
            data: data
        });
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const getAdvocate = async (req, res, next) => {
    const id = req.params.id
    try {
        const data = await Advocate.findById(id)
        if(!data) return next(new HandleError("This ID does not exist or have been deleted", 404))
        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        res.status(400).json({
            Status: "Failed",
            message: err
        })
    }
}

const createAdvocate = async (req, res) => {
    const body = {
         name: req.body.name,
         email: req.body.email,
         userName: req.body.userName,
         profile_pic: req.body.profile_pic,
         short_bio: req.body.short_bio,
         long_bio: req.body.long_bio,
         advocate_years_exp: req.advocate_years_exp,
         company: req.body.company,
         links: req.body.links,
    }
    try {
        const data = await Advocate.create(body)
        res.status(201).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const updateAdvocate = async (req, res, next) => {
    const id = req.params.id
    const body = req.body

    try{
        const data = await Advocate.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        if(!data) return next(new HandleError(`Advocate with ID ${id} not found or might have been deleted`, 404))
        
        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const deleteAdvocate = async (req, res, next) => {
    const id = req.params.id
    try{
        const del = await Advocate.findByIdAndDelete(id)
        if(!del) return next(new HandleError(`${id} cant be found in database, might be deleted`, 404))
        res.status(204).json({
            status: null
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

module.exports = {
    getAllAdvocates,
    getAdvocate,
    createAdvocate,
    updateAdvocate,
    deleteAdvocate
}