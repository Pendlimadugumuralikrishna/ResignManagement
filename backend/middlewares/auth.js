const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.replace("Bearer ", "");

    if(!token){
        return next(new Error('Access denied'));
    }

    try{
        const decoded = jwt.verify(token,"business");
        console.log(decoded);
        req.user = decoded;
        next();

    }catch(e){
        next(new Error("'Invalid token'"));
    }

}


const authorizeRole = (role) => {
    return (req,res,next)=> {
        console.log(req.user);
        if(req.user?.role !== role){
            return next(new Error("Access denied"))
        }
        next();
    }
}

module.exports ={authenticate,authorizeRole}