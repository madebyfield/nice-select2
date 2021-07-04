// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Common Loaders
 * + @Exporting Module
 */

// ---------------------
// @Loading Dependencies
// ---------------------

const manifest = require("../manifest"),
      path = require("path"),
      cssNext = require("postcss-cssnext"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");

// ---------------
// @Common Loaders
// ---------------
const loaders = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      sourceMap: manifest.IS_DEVELOPMENT
    }
  },
  {
    loader: "css-loader",
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      minimize: manifest.IS_PRODUCTION
    }
  },
  {
    loader: "postcss-loader",
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      plugins: () => [cssNext()]
    }
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: manifest.IS_DEVELOPMENT,
      includePaths: [
        path.join("../../", "node_modules"),
        path.join(manifest.paths.src, "styles"),
        path.join(manifest.paths.src, "")
      ]
    }
  }
];



const rule = {
  test: /\.scss$/,
  use: [MiniCssExtractPlugin.loader, "css-loader"]
};

// -----------------
// @Exporting Module
// -----------------

module.exports = rule;
