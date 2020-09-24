const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  options: {
    root: __dirname,
    source: path.join(__dirname, 'src'),
    output: path.join(__dirname, 'dist'),
    mains: {
      // Relative path, so resolves to options.source + home.*
      index: 'index.jsx'
    }
  },
  use: [
    standard(),
    react({
      html: {
        title: 'Supportr'
      }
    }),
  ],
  target: 'web',
  devtool: 'source-map',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    })
  ]
};


/*
entry: {
  server: './index.js',
},
output: {
  path: path.join(__dirname, 'dist'),
  publicPath: '/',
  filename: '[name].js'
},
target: 'node',
node: {
  // Need this when working with express, otherwise the build fails
  __dirname: false,   // if you don't put this is, __dirname
  __filename: false,  // and __filename return blank or /
},
externals: [nodeExternals()], // Need this to avoid error when working with Express
module: {
  rules: [
    {
      // Transpiles ES6-8 into ES5
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      // Loads the javacript into html template provided.
      // Entry point is set below in HtmlWebPackPlugin in Plugins 
      test: /\.html$/,
      use: [{loader: "html-loader"}]
    }
  ]
},
plugins: [
  new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html",
    excludeChunks: [ 'server' ]
  })
]

*/