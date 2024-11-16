
const {Resign}= require("../services/resignation.service.js");
const submitResignation = async(req,res)=>{
    try{
        const data = await Resign(req.body);

        res.status(200).json({
            data: {
              resignation: {
                _id: data._id,
              },
            },
          });

    }catch(e){
        console.log(e);
    }
}

module.exports = {submitResignation};