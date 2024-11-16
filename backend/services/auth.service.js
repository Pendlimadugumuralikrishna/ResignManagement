const status = require("http-status");
const userService = require("./user.service")

const loginWithUsernameAndPassword = async(username,password)=>{
    console.log(password +' in the logi =n service');
    const user = await userService.getUserByUsername(username);
    if(!user || !await user.isPasswordMatch(password)){
        throw new Error("Incorrect credentials")
    }
    return user;
}

module.exports = {loginWithUsernameAndPassword}