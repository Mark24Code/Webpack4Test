const path = require("path");
const merge = require("webpack-merge");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.js");

const resolvePath = _path => {
  return path.resolve(__dirname, _path);
};

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: resolvePath("dist"),
    publicPath: "/",
    pathinfo: false
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 9090,
    watchOptions: {
      // 可以借鉴cc的优化路径
      // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
      ignored: [resolvePath("../dist"), resolvePath("../node_modules")],
      poll: 1000
    }
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
});