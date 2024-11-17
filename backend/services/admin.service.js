const User = require("../models/user.model");
const Resignation = require("../models/resignation.model");
const ExitModel = require("../models/exitResponse.model")
const bcrypt = require("bcrypt");

const initialiseAdminAccount = async () => {
  try {
    const existingHr = await User.findOne({ role: "HR" });
    if (!existingHr) {
        const hashedPassword = await bcrypt.hash("admin",10);
        const user = new User({
            role:"HR",
            username:"admin",
            password:hashedPassword
        })

        await user.save();
        console.log("admin created");
    }
  } catch {
    console.log("error");
  }
};

const conclude_resignation = async (data) => {
  try{
    const {resignationId,approved,lwd} = data;
    const resignation = await Resignation.findOne({_id:resignationId});

    if(!resignation){
      throw new Error("Resignation not found.")
    }

    if(approved){
      if(!lwd){
        throw new Error("Last working day (lwd) is required for approval.")
      }
    

    resignation.status = "approved";
    resignation.lwd = new Date(lwd);
    }else{
      resignation.status = "rejected";
    }

    await resignation.save();

    return resignation;

  }catch(e){
    throw new Error(e);

  }
}

const getAllExitResponses = async (data) => {
  try{
    const exitResponses = await ExitModel.find({});

    const d = exitResponses.map(response => ({
      employeeId:response.employeeId,
      responses:response.responses
    }))

    return d;

  }catch(e){
    console.log(e);

  }
}

module.exports = initialiseAdminAccount;
module.exports = {conclude_resignation,getAllExitResponses};