const standard = require('@neutrinojs/standardjs');
const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
    output: '.'
  },
  use: [
    standard(),
    react({
      html: {
        title: 'Supportr'
      }
    }),
  ],
};

// 
