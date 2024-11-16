const { authenticate, authorizeRole } = require("../middlewares/auth.js");
const {submitResignation} = require("../controllers/resignation.controller");

const express = require("express");
const Router = express.Router();


Router.post("/resign", authenticate, authorizeRole("Employee"), submitResignation);


module.exports = Router;
