const jwt = require('jsonwebtoken');

let secret="business"
const generateToken = async(userId,type,expires,role)=>{
    let payload = {
        userId:userId,
        type:type,
        role:role,
        exp:expires,
        iat:Math.floor(Date.now()/1000)
    }
    let token = jwt.sign(payload,secret);
    return token;
}
const generateAuthToken = async(user)=>{
    const accessTokenExpires = Math.floor(Date.now()/1000) + 60*60;
    const token = await generateToken(user._id,"access",accessTokenExpires,user.role);

    return {
        access:{
            token:token,
            expires:new Date(accessTokenExpires * 1000)

        }
    }
}

module.exports = {
    generateAuthToken,
    generateToken
}