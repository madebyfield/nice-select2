// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Common Loaders
 * + @Merging Production Loaders
 * + @Merging Development Loaders
 * + @Exporting Module
 */


// ---------------------
// @Loading Dependencies
// ---------------------

const
  manifest          = require('../manifest'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");


// ---------------
// @Common Loaders
// ---------------

let rule = {};

const loaders = [
 {
        loader: MiniCssExtractPlugin.loader,
        options: {}
   },
  {
    loader: 'css-loader',
    options: {
      sourceMap : manifest.IS_DEVELOPMENT,
      minimize  : manifest.IS_PRODUCTION,
    },
  }
];


rule = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
};


// -----------------
// @Exporting Module
// -----------------

module.exports = rule;
