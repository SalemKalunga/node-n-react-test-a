const express = require("express");
const  {getPlanets,getDefaultRoute} = require("./planets.controller")
const planetsRouter = express.Router();

planetsRouter.get("/planets", getPlanets)
planetsRouter.get("/", getDefaultRoute)
module.exports=planetsRouter