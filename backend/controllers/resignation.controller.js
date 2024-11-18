
const {Resign,getResignations}= require("../services/resignation.service.js");
const submitResignation = async(req,res)=>{
  const id = req.user.userId;
  console.log("in the user resignation controller "+req.user.userId);
    try{
        const data = await Resign(req.body,id);

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

const getAllResignations = async(req,res)=>{
  try{
    const data  = await getResignations();
    res.status(200).json({data:data});

  }catch(e){
    console.log("from getAllResigns" , e);
  }
}
module.exports = {submitResignation,getAllResignations};