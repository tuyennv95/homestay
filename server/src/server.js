#! /bin/node
"use strict";

const http = require("http");
const app = require("./bootstrap/app");
const config = require("config");
const logger = require("./lib/logger");

const server = http.createServer(app);
const __PORT__ = config.get("app.PORT");

server.listen(__PORT__, () => {
  logger.info(`Server listening on port: ${__PORT__}`);
});
