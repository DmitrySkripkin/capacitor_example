const path = require('path');

module.exports = () => {
  return {
    mode: 'production',
    entry: ['@babel/polyfill', './index.js'],
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: 'index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    }
  }
};