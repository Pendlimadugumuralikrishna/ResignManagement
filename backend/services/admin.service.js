const User = require("../models/user.model");
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

module.exports = initialiseAdminAccount;