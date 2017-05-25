'use strict';

module.exports = function(rootDir) {
  return {
    context: rootDir,
    debug: true,
    devtool: 'eval',
    output: {
      publicPath: '/'
    },
    devServer: {
      contentBase: rootDir + '/app',
      historyApiFallback: true
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: [/node_modules/]
        }
      ]
    },
    eslint: {
      configFile: '.eslintrc'
    }
  }
};
