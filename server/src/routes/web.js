"use strict";

const { Router } = require("express");
const HomeController = require("../apps/controllers/site/home");

const webRouter = Router();

webRouter.get("/", HomeController.home);

module.exports = webRouter;
