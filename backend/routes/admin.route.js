
const {authenticate,authorizeRole} = require("../middlewares/auth");
const {getAllResignations} = require("../controllers/resignation.controller")
const {concludeResignation} = require("../controllers/admin.controller")
const {getAllExitresponses} = require("../controllers/admin.controller")
const express = require("express");
const  Router = express.Router();

Router.get("/resignations",authenticate,authorizeRole("HR"),getAllResignations);
Router.get("/exit_responses",authenticate,getAllExitresponses);
Router.put("/conclude_resignation",authenticate,authorizeRole("HR"),concludeResignation);


module.exports = Router;