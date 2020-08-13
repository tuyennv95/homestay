"use strict";

const { catchAsync } = require("../../../lib/utils");

exports.home = catchAsync(async (req, res) => {
  res.render("index");
});
