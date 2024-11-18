const mongoose = require("mongoose");
const joi = require("joi");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        // validate(value){
        //     if(!value.match(/\d/) || value.match(/[a-z][A-Z]/)){
        //         throw new Error("password must contain atleat one letter and one number")
        //     }
        // }
    },
    role:{
        type:String,
        enum:["HR","Employee"],
        // required:true
        default:"Employee"
    }
   
},
{
    timestamps:true
});


userSchema.methods.isPasswordMatch = async function(password){
const res = await bcrypt.compare(password,this.password);
return res;
}

const User  = mongoose.model("User",userSchema);
module.exports = User;