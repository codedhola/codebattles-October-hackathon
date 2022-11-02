const HandleError = require("../config/handleError");
const Companies = require("./../models/companyModel");

const getAllCompanies = async (req, res, next) => {
    try {
        const data = await Companies.find({});

        res.status(200).json({
            status: "successful",
            results: data.length,
            data: data
        });
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const getCompany = async (req, res,next) => {
    const id = req.params.id;
    try {
        const data = await Companies.findById(id, {});
        if(!data) return next(new HandleError("Company ID not found,does not exist or might have been deleted"))

        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const addCompany = async (req, res,next) => {
    const body = req.body;
    console.log(body)
    try {
        const data = await Companies.create(body);
        res.status(201).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const updateCompany = async (req, res, next) => {
    const body = {
        logo: req.body.logo,
        summary: req.body.summary,
        advocates: req.body.advocates
    };
    if(req.body.name) return next(new HandleError("Sorry a Name is unique can't be edited, can only be deleted", 400))
    const id = req.params.id;
    try {
        const data = await Companies.findByIdAndUpdate(id, body, { runValidators: true, new: true });
        if(!data) return next(new HandleError(`Company with ID ${id} not found, doesnt exist or might have been deleted`, 400))

        res.status(202).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

const deleteCompany = async (req, res, next) => {
    const id = req.params.id;
    try {
        data = await Companies.findByIdAndDelete(id);
        if(!data) return next(new HandleError(`Company with ID ${id} not found, might have been deleted`))
        
        res.status(204).json({
            status: null
        })
    }catch(err){
        next(new HandleError(err, 400))
    }
}

module.exports = {
    getAllCompanies,
    getCompany,
    addCompany,
    updateCompany,
    deleteCompany
}