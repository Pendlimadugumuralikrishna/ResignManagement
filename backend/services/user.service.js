const User = require("../models/user.model")
const status = require("http-status");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const getUserByUsername = async(username)=>{
   const user=  await User.findOne({username:username});
   return user;
}

const createUser = async (data) => {
    console.log("In create user");

  const {role} = data;

  if(role === "HR"){
    const existingHr = await User.findOne({role:"HR"});
    if(existingHr){
        throw new Error("'HR account already exists'");
    }
  }
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  const user = await User.create({ ...data, password: hashedPassword });

  console.log(user);

  await user.save();

  return user;
};


module.exports={createUser,getUserByUsername};
