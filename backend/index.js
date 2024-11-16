require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const admin = require("./services/admin.service.js");
const taskRoutes = require("./routes/tasks.routes");
const authRoutes=require("./routes/auth.route");
const app = express();
const PORT = 8080;
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
app.use("/tasks", taskRoutes);
app.use("/auth",authRoutes);

app.listen(PORT, async () => {
  await admin();
  console.log(`Backend listening on Port ${PORT}!`);
});
