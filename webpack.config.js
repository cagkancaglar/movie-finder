const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports ={
    entry: ["babel-polyfill","./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    devServer: {
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
}