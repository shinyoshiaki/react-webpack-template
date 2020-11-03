const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const dist = __dirname + "/build";

module.exports = {
  entry: "./src/index",
  devtool: "inline-source-map",
  output: {
    path: dist,
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts$/,
        use: [
          {
            loader: "worker-loader",
          },
          "ts-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:
        process.env.NODE_ENV === "production"
          ? "./public/index.prod.html"
          : "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   globDirectory: dist,
    //   globPatterns: ["*.{html,js,css}", "images/*.{png,gif,webp,svg,jpg,jpeg}"],
    //   swDest: dist + "/sw.js",
    // }),
  ],
  devServer: {
    contentBase: "public",
    disableHostCheck: true,
    open: true,
    hot: true,
  },
};
