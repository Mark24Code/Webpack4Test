const path = require("path");
const merge = require("webpack-merge");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.js");

console.log("<<<<");
console.log(process.env.NODE_ENV);
console.log("<<<<@@@");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 9090
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      __ENV__: JSON.stringify("FFFFAA")
    })
  ]
});