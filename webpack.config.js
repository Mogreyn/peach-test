const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const PATHS = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
  assets: "assets",
};

const optimization = () => ({
  splitChunks: {
    chunks: "all",
  },
  minimize: !isDev,
  minimizer: !isDev ? [new TerserWebpackPlugin()] : [],
});

module.exports = {
  context: PATHS.src,
  mode: isDev ? "development" : "production",
  entry: "./index.js",
  output: {
    filename: `${PATHS.assets}/js/[name].[contenthash].js`,
    path: PATHS.dist,
    assetModuleFilename: `${PATHS.assets}/img/[name][ext]`,
    clean: true,
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/img"),
          to: path.resolve(__dirname, "dist/assets/img"),
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}/fonts/[name][ext]`,
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".css"],
  },
};
