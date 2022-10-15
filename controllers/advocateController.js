const Advocate = require("./../models/advocateModel");

const getAdvocates = async (req, res) => {
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


module.exports = {
    getAdvocates
}