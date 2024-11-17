const { authenticate, authorizeRole } = require("../middlewares/auth.js");
const {submitResignation} = require("../controllers/resignation.controller");
const {exitResponse} = require("../controllers/exitResponse.controller.js")
const express = require("express");
const Router = express.Router();


Router.post("/resign", authenticate, authorizeRole("Employee"), submitResignation);

Router.post("/responses", authenticate, authorizeRole("Employee"),exitResponse);
module.exports = Router;
