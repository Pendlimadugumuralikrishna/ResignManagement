const {submitExitResponse} = require("../services/exitResponse.service");
const exitResponse = async(req,res)=>{
    try{
        const data = await submitExitResponse(req.body);
        res.status(200).json({ message: "Responses submitted successfully." });

    }catch(e){
        res.status(500).json({ message: e});
    }
}
module.exports = {exitResponse};