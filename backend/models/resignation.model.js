const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    lwd:{
        type:Date,
        required:true
    },
    reason:{
        type:String,

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