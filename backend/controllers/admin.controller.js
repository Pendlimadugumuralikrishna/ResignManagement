const {conclude_resignation,getAllExitResponses} = require("../services/admin.service")
const concludeResignation = async(req,res)=>{
    try{
        const data = await concludeResignation(req.body);
        res.status(200).json({ message: `Resignation ${data.approved ? "approved" : "rejected"} successfully.` })

    }catch(e){
        res.status(401).send(e);
    }
}

const getAllExitresponses = async(req,res)=>{
    try{
        const data = await getAllExitResponses(req.body);
        res.status(200).json({data:data});

    }catch(e){
        console.log(e);
    }
}
module.exports = {concludeResignation,getAllExitresponses};