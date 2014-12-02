var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./slides.js",
  output: {
    path: __dirname + '/dist',
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "template-html-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Webpack Über Alles | an introduction"  })
  ]
};
