const path = require("path");
const webpackMerge = require("webpack-merge");
const config = require("./webpack.base.config");

const clientConfig = {
  mode: "development",
  entry: "./src/client.js",
  output: {
    filename: "client-build.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              esModule: false, // !!!important
            },
          },
        ],
      },
    ],
  },
};

module.exports = webpackMerge.merge(config, clientConfig);
