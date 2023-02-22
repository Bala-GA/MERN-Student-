const mongoose = require('mongoose');

const stuSchema = mongoose.Schema({
    FName:{
        type:String,
        trim:true,
        required:true,
    },
    LName:{
        type:String,
        trim:true,
        required:true,
    },
    Location:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Dob:{
        type:String,
        required:true
    },
    Education:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Info",stuSchema)   