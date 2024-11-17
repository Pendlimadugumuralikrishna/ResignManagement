const ExitResponse = require("../models/exitResponse.model");

const submitExitResponse = async(data)=>{
    try{
        const {responses} = {data};

        if(!responses || !Array.isArray(responses)){
            throw new Error("Responses are required and must be an array.")
        }

        const exitResponse = new ExitResponse({
            employeeId: req.user.userId,
            responses
        })

        await exitResponse.save();
        return exitResponse;

    }catch(e){
        throw new Error(e);

    }
}

module.exports = {submitExitResponse};