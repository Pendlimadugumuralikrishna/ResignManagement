
const {authenticate,authorizeRole} = require("../middlewares/auth");
const {getAllResignations} = require("../controllers/resignation.controller")
const {concludeResignations} = require("../controllers/admin.controller")
const {getAllExitresponses} = require("../controllers/admin.controller")
const express = require("express");
const  Router = express.Router();

Router.get("/resignations",authenticate,authorizeRole("admin"),getAllResignations);
Router.get("/exit_responses",authenticate,authorizeRole("admin"),getAllExitresponses);
Router.put("/conclude_resignation",authenticate,authoorizeRole("admin"),concludeResignations);


module.exports = Router;