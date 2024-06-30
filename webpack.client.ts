import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

const clientConfig: Configuration = merge(baseConfig, {
  mode: 'production',
});

export default clientConfig;
