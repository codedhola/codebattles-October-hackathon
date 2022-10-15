const getCompanies = (req, res) => {
    console.log("working")
    res.status(200).json({
        "status": "successful",
        "message": "successfully companies loading"
    });
}

module.exports = {
    getCompanies
}