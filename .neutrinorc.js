const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');
const path = require('path')
const nodeExternals = require('webpack-node-externals')

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
        title: 'Supporter'
      }
    })
  ],
  target: 'web',
  devtool: 'source-map',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [  nodeExternals()  ], // Need this to avoid error when working with Express
};