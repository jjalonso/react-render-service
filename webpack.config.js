
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
