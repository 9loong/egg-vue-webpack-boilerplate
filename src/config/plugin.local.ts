import { join } from 'path';

exports.cors = {
  enable: true,
  package: 'egg-cors'
};

exports.webpack = {
  enable: true,
  path: join(__dirname, '../../plugin/midway-webpack')
};

exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue'
};

exports.logview = {
  package: 'egg-logview',
  env: ['local']
};
