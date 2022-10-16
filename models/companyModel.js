const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Company must have a name"],
        trim: true
    },
    logo: {
        type: String,
        default: "logo.png"
    },
    summary: {
        type: String,
        default: "A ... Company located at ..., we produce..."
    },
    advocates: {
        type: [Schema.Types.ObjectId],
        ref: "advocate"
    }
});

const Companies = mongoose.model("companie", companySchema);

module.exports = Companies;





/** 
 *   SCHEMA OBJECT TYPE
 
  "name": "Risevest",
  "logo": "Risevest.jpg",
  "summary": "A company that deals with payment seemlessly and invest funds for customers",
  "advocate": [
    {$oid: "634aa10d0c9e80f276c087fb", "name": "shola"},
    {$oid: "634c040f4437d2fc84a783e3", "name": "coded-hola"}
]
  
*/


