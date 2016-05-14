import webpack from 'webpack';

const config = {
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js|$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
    // preLoaders: [ 
    //   { //delays coverage til after tests are run, fixing transpiled source coverage error
    //     test: /\.(js|jsx)$/,
    //     include: [path.join(__dirname, '../common'),path.join(__dirname, '../modules'),path.join(__dirname, '../utils')],
    //     exclude: /\.spec\.js$/,
    //     loader: 'isparta' 
    //   } 
    // ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
    })
  ]
};
export default config;
