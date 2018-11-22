const path = require("path");
const merge = require("webpack-merge");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 9090,
  },
  plugins: [new ManifestPlugin(), new webpack.HotModuleReplacementPlugin()]
});