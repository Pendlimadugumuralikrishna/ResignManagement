const Resignation = require("../models/resignation.model");

const Resign = async(data)=>{
    const {lwd,reason} =data;
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
            employeeId:req.user.userId,
            lwd:lastWorkingDay,
            reason:reason,

        });

        await resignation.save();

        return resignation;

    }catch(e){
        console.log(e);
    }
   
}

module.exports = {Resign};