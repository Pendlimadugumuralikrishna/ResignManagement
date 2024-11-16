const express = require("express");
const authController = require("../controllers/auth.controller");
const Router = express.Router();

Router.post("/login",authController.login);
Router.post("/register",authController.register);


module.exports = Router;