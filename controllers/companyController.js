const Companies = require("./../models/companyModel");

const getAllCompanies = async (req, res) => {
    try {
        const data = await Companies.find({});

        res.status(200).json({
            status: "successful",
            results: data.length,
            data: data
        });
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

const getCompany = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Companies.findById(id, {});

        res.status(200).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        });
    }
}

const addCompany = async (req, res) => {
    const body = req.body;
    console.log(body)
    try {
        const data = await Companies.create(body);
        res.status(201).json({
            status: "Successful",
            data: data
        })
    }catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        });
    }
}

const updateCompany = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
        const data = await Companies.findByIdAndUpdate(id, body);
        res.status(202).json({
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

const deleteCompany = async (req, res) => {
    const id = req.params.id;
    try {
        await Companies.findByIdAndDelete(id);
        res.status(204).json({
            status: null
        })
    }catch(err){
        re.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

module.exports = {
    getAllCompanies,
    getCompany,
    addCompany,
    updateCompany,
    deleteCompany
}