const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src/app/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@compos': path.join(__dirname, 'src/app/components'),
      '@fire': path.join(__dirname, 'src/app/firebase'),
      '@store' : path.join(__dirname, 'src/app/store')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new StyleLintPlugin({
        files: ['src/components/**/*.vue']
    })
  ]
}
