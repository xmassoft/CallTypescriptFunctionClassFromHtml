
const path = require('path');
const webpack = require('webpack');



module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	library: 'CallTypescriptFunctionClassFromHtml'
  },
  
  plugins: [
    new webpack.BannerPlugin({
      entryOnly: true,
      include: 'bundle.js',
      raw: true,
      banner: 'var myFunction = window.CallTypescriptFunctionClassFromHtml.myFunction; var MyPersonClass = window.CallTypescriptFunctionClassFromHtml.MyPersonClass;',
      footer: true
    })
  ]
  
};

