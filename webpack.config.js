'use strict';
// Webpack：https://www.yuque.com/easy-team/easywebpack
// Egg Vue: https://www.yuque.com/easy-team/egg-vue

const path = require('path');

module.exports = {
  framework: 'vue',
  entry: {
    'index/index': './src/app/web/page/index/index.vue',
    'category/category': './src/app/web/page/category/category.vue',
    'about/about': './src/app/web/page/about/about.vue',
    'admin/home/home': './src/app/web/page/admin/home/home.vue',
    'admin/login/login': './src/app/web/page/admin/login/login.vue',
    'test': './src/app/web/page/test/test.vue'
  },
  plugins: [
    { imagemini: false },
    { manifest: { fileName: './src/config/manifest.json' }}
  ],
  customize(config){ // 此外 webpackConfig 为原生生成的 webpack config
    config.output.path = path.resolve(__dirname, './src/app/view');
    return config;
  },
  alias: {
    asset: './src/app/web/asset',
    component: './src/app/web/component',
    framework: './src/app/web/framework',
    store: './src/app/web/store'
  }
};
