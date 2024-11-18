const mongoose = require("mongoose");
const User = require("../models/user.model")
const exitResponseSchema = new mongoose.Schema({
    employeeId:{
        type:mongoose.Schema.Types.ObjectId,
   
        ref:User

    },
    responses:[
        {
            "questionText":{
                type:String,
                required:true
            },
            "response":{
                type:String,
                required:true
            }
        }
    ]
});


module.exports = mongoose.model("exitResponse",exitResponseSchema);