const status = require("http-status");
const authService =  require("../services/auth.service");
const tokenService = require("../services/token.service.js");
const {createUser} = require("../services/user.service");
const register = async(req,res)=>{
    console.log(req.body);
    try{
        let user = await createUser(req.body);
        console.log("in register controller");
        res.status(201).json(user);

    }catch(e){
        res.status(status.NOT_CREATED).json(e);
    }
}


const login = async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await authService.loginWithUsernameAndPassword(username,password);
        const tokens = await tokenService.generateAuthToken(req.body);
        res.status(200).json({user,tokens});

    }catch(e){
        console.log(e);
        res.status(500).json(e);
    }
}

module.exports={login,register};