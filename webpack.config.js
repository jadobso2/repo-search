const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "settings";',
              includePaths: [
                path.resolve(__dirname, 'src/styles')
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    publicPath: '/public',
  }
};
