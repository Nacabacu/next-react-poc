import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';

const baseConfig: Configuration = {
  entry: {
    landingPage: ['./src/templates/index.tsx', './src/shared/globals.css'],
    creative: ['./src/templates/creative/index.tsx', './src/templates/creative/style.css']
  },
  output: {
    path: path.resolve(__dirname, 'public/templates'),
    filename: '[name].bundle.js',
    publicPath: '/templates/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}]],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
       ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'landingPage.html',
      chunks: ['landingPage'],
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/creative/index.html',
      filename: 'creative.html',
      chunks: ['creative'],
    })
  ],
};

export default baseConfig;
