const path = require("path");

const nodeExternals = require("webpack-node-externals");
const webpackMerge = require("webpack-merge");
const config = require("./webpack.base.config");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server.js",
  externals: [nodeExternals()],
  output: {
    filename: "server-build.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  // module: {
  //     rules: [
  //         {
  //             test: /\.css$/,
  //             use: [
  //                 'isomorphic-style-loader',
  //                 {
  //                     loader: 'css-loader',
  //                     options: {
  //                         importLoader: 1
  //                     }
  //                 },
  //                 'postcss-loader'
  //             ]
  //         }
  //     ]
  // }
};

module.exports = webpackMerge.merge(config, serverConfig);
