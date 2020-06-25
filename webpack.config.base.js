const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Delcare an entry file which is a gateway into your js that bridges it to webpack. Output key determines where to put out the bundle.
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), //Gets the absolute path and  puts dist there
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        // for this rule, exclude node modules
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};