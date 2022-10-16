const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    companies: {
        type: Schema.Types.ObjectId,
        ref: "advocates"
    },
    links: [String]
});

const Advocate = mongoose.model("Advocate", advocateSchema);

module.exports = Advocate;


/** 
 *   SCHEMA OBJECT TYPE
 
"name": "shola benson",
  "profile_pic": "shola.jpg",
  "short_bio": "I am a backend engineeer ",
  "long_bio": "works as a developer experience at flutterwave",
  "company": {
    "$oid": "",
    "name": "flutterwave",
    "logo": "flutterwave.jpg",
    "href": "/companies/"    
  }
  
*/