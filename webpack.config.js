const path = require('path');

module.exports = (env) => {

  return {
    mode: 'production',
    entry: {
      'index': path.resolve(__dirname, './dist/commonjs/index.js')
    },
    output: {
      path: path.resolve(__dirname, './dist/umd'),
      filename: '[name].js',
      library: 'alSession',
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  };

};
