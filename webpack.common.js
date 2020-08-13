const path = require("path");
const webpack = require("webpack");
const dotEnv = require("dotenv");

const isProd = process.env.NODE_ENV === "production";

dotEnv.config({
  path: isProd ? path.resolve(".env") : path.resolve(".env.development"),
});

const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  context: path.join(__dirname, "client", "src"),
  entry: {
    app: "./index.js",
  },

  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",],
      },
     
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new webpack.DefinePlugin(
      (() => {
        const reactEnv = {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        };

        Object.keys(process.env)
          .filter((key) => key.match(/^REACT_.*$/))
          .map((key) => {
            reactEnv[key.replace("REACT_", "")] = JSON.stringify(
              process.env[key]
            );
          });

        return {
          "process.env": reactEnv,
        };
      })()
    ),
    new ManifestPlugin({
      publicPath: path.resolve("src"),
      fileName: "asset-manifest.json",

      generate: (seed, files, entrypoints) => {
        return {
          entrypoints,
        };
      },
    }),
  ],
};
