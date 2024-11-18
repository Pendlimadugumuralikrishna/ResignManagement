const Resignation = require("../models/resignation.model");

const Resign = async(data,id)=>{
    const {lwd} =data;
    try{
        if(!lwd){
            throw new Error('Last working day and reason are required');
        }
    
        const lastWorkingDay = new Date(lwd);
    
        const day = lastWorkingDay.getDate();
    
        if(day == 0 || day == 6){
            throw new Error("Last working day cannot be on a weekend");
        }

        const resignation = new Resignation({
            employeeId:id,
            lwd:lastWorkingDay,
         

        });

        await resignation.save();

        return resignation;

    }catch(e){
        console.log(e);
    }
   
}

const getResignations =async()=>{
    try{
        const resigns = await Resignation.find({});
         const d =  resigns.map(resign=>({
            _id:resign._id,
            employeeId:resign.employeeId,
            lwd:resign.lwd,
            status:resign.status
        }))
        return d;


    }catch(e){
        throw new error(e);
    }
}

module.exports = {Resign,getResignations};