const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "server", "src", "public", "js", "app"),
    filename: "dist/[name].js",
    chunkFilename: "dist/[name]-chunk.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src", "public"),
    port: 3001,
    proxy: {
      context: () => true,
      target: process.env.BASE_URL || "http://localhost:3000",
    },
    open: true,
    openPage: process.env.BASE_URL || "http://localhost:3000",
    overlay: true,
    writeToDisk: true,
  },
});
