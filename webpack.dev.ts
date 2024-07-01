import path from 'path';
import { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

const devConfig: Configuration & DevServerConfiguration = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public/templates'),
    compress: true,
    port: 9000,
    hot: true,
  },
});

export default devConfig;
