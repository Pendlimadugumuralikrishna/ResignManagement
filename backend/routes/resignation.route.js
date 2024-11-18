const { authenticate, authorizeRole } = require("../middlewares/auth.js");
const {submitResignation} = require("../controllers/resignation.controller");
const {exitResponse} = require("../controllers/exitResponse.controller.js")
const express = require("express");
const Router = express.Router();


Router.post("/resign", authenticate, submitResignation);

Router.post("/responses", authenticate,exitResponse);
module.exports = Router;
