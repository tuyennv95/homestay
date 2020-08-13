const { NotFoundException } = require("../exceptions");

module.exports = (req, res, next) =>
  next(
    new NotFoundException(`Can't not find ${req.originalUrl} on this server!`)
  );
