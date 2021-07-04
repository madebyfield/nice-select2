const manifest = require("./manifest");

const plugins = [];

// html plugin
// const htmlPlugin = new HtmlWebpackPlugin({  // Also generate a test.html
//   filename: 'index.html',
//   template: 'index.html'
// })

// plugins.push(htmlPlugin);

// extract plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const extractPlugin = new MiniCssExtractPlugin({
  filename: manifest.outputFiles.css,
  //filename: "[name].css",
  //allChunks: true
});
plugins.push(extractPlugin);

// copy plugin
const path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin");

const copyPlugin = new CopyWebpackPlugin(
  {
    patterns: [
      {
        from: manifest.paths.src + "/**/*",
        to: manifest.paths.build
      }
    ]
  }
);

plugins.push(copyPlugin);

// internal plugins

const webpack = require("webpack");

// ---------------
// @Common Plugins
// ---------------

plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(manifest.NODE_ENV)
    }
  }),

  new webpack.ProvidePlugin({
    global: "window",
    window: "window"
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
);

module.exports = plugins;
