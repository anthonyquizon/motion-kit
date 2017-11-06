const path = require('path');

module.exports = {
  entry: {
    hello: './output.mo/examples/hello/main.js',
  },
  output: {
    filename: '[name].dist.js',
    path: path.resolve(__dirname, 'output/examples')
  }
};
