const mongoose = require("mongoose")
const Schema = mongoose.Schema

const advocateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Advocate requires a name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "An Email must be provided"],
        unique: true,
        validate: { 
            validator: function(val){
                return val.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i);
            },
            message: "A Valid Email must be provided"
        }
    },
    userName: {
        type: String,
        required: [true, "A Username must be provided"],
        unique: true
    },
    profile_pic: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMN5gaxSCB4Nwwx6jw-4vosACBtVVqMfjugQ&usqp=CAU",
        // validate: {
        //     validator: function(val){
        //         return val.match(/[a-z0-9]\.(jpg|png|jpeg)/i)
        //     },
        //     message: "Profile pic must be in a valid format: Either jpg, jpeg or png"
        // }
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
    company: [Schema.Types.ObjectId],
    links: Object,
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})

const Advocate = mongoose.model("Advocate", advocateSchema)

module.exports = Advocate


/** 
 *   SCHEMA OBJECT EXAMPLE
 
  {
    "name": "shola benson",
    "profile_pic": "shola.jpg",
    "short_bio": "I am a backend engineeer ",
    "long_bio": "works as a developer experience at flutterwave",
    "links": {
        "youtube": "youtube.shola",
        "github": "github.com/shola",
        "twitter": "twitter.com/shola"
    }
    "company": [ObjectId]
  }
*/