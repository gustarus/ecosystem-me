'use strict';

var webpack = require('webpack');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer');
var mixins = require('stylus-mixins');
var TextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var Svg = require('webpack-svgstore-plugin');
var variables = require(__dirname + '/../app/config/template');

module.exports = function(rootDir) {
  // assets source dir
  var srcInnerDir = '/app';
  var srcAbsoluteDir = rootDir + srcInnerDir;

  // assets destination dir
  var destInnerDir = '/web/assets';
  var destAbsoluteDir = rootDir + destInnerDir;

  // import package config
  var packageConfig = require(rootDir + '/package');

  return {
    // application entry points list
    entry: {
      application: './app/index.js',
      vendors: Object.keys(packageConfig.dependencies)
    },

    // modules output configurations
    output: {
      path: destAbsoluteDir,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].js',
      publicPath: '/assets/'
    },

    // application configuration
    resolve: {
      modulesDirectories: ['node_modules'],
      alias: {
        '@core': srcAbsoluteDir
      }
    },

    // modules configuration
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.jade$/, loader: 'jade-loader'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.styl$/, loader: TextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')},
        {test: /\.json/, loader: 'json-loader'},
        {test: /\.(eot|woff|woff2|ttf|pdf|png|jpg|jpeg|gif|pptx|key)$/, loader: 'file-loader?context=./app/&name=[path][name].[ext]'}
      ]
    },

    // postprocessor configuration
    postcss: [autoprefixer({browsers: ['last 5 versions']})],

    // stylus configuration
    stylus: {
      use: [rupture(), mixins()]
    },

    node: {
      fs: 'empty'
    },

    // plugins configurations
    plugins: [
      // vendors entry point
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[chunkhash].js'),

      // move require('style.css') into a separate ccs files
      new TextPlugin('[name].[chunkhash].css'),

      // generate svg sprite
      new Svg(srcAbsoluteDir + '/vector/**/*.svg', '', {
        name: 'sprite.[hash].svg',
        chunk: 'application',
        prefix: '',
        svgoOptions: {
          convertStyleToAttrs: true
        }
      }),

      // provide libraries
      new webpack.ProvidePlugin({
        _: 'lodash',
        React: 'react',
        ReactDOM: 'react-dom',
        moment: 'moment'
      }),

      // generate index.html
      new HtmlPlugin({
        url: variables.host,
        title: variables.title,
        description: variables.description,
        image: variables.host + variables.image,
        fb: {id: variables.fb.id},
        chunks: ['application', 'vendors'],
        filename: '../index.html',
        template: './app/templates/index.jade'
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  };
};
