
module.exports = {
  context: __dirname + '/src',
  target: 'node',
  entry: './server.js',
  output: {
    path: __dirname + '/dist',
    filename: 'react-render.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // {
      //   test: /\.js/,
      //   loader: 'import-glob'
      // }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },  
}
