require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const {initialiseAdminAccount} = require("./services/admin.service.js");
const resignRoutes = require("./routes/resignation.route.js");
const authRoutes=require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route.js")
const app = express();
const PORT = 8082;
const DB_URI = "mongodb://localhost:27017/task-manager";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());
app.use("/user", resignRoutes);
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);

app.listen(PORT, async () => {
  try {
    await initialiseAdminAccount();
    console.log(`Backend listening on Port ${PORT}!`);
} catch (error) {
    console.error("Error initializing admin account:", error);
}
});