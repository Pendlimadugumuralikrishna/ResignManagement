const mongoose = require("mongoose");
const User = require("../models/user.model");
const resignationSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
      
        ref:'User'
    },
    lwd:{
        type:Date,
        required:true
    },
   
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending"
    },
    submissionDate:{
        type:Date,
        default:Date.now,
    }
})


module.exports = mongoose.model("Resignation", resignationSchema);