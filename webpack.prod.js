const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let webpackModule = merge(common, {
  mode: "production",
  optimization: {
    runtimeChunk: "single"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});

// 分析模式
if(process.env.STAT==='stat') {
  webpackModule = merge(webpackModule,{
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        generateStatsFile: true,
        openAnalyzer: true,
      })
    ]
  })
}

module.exports = webpackModule;