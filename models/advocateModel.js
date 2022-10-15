const mongoose = require("mongoose");

const advocateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Advocate requires a name"],
        trim: true
    },
    profile_pic: {
        type: String,
        default: "image.jpg"
    },
    short_bio: {
        type: String,
        default: "I am ... who works as a ..."
    },
    long_bio: String,
    advocate_years_exp: {
        type: Number,
        default: 1
    },
    company: {
        type: [String]
    },
    links: [String]
});

const Advocate = mongoose.model("Advocate", advocateSchema);

module.exports = Advocate;