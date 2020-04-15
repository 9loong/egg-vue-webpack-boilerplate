import * as path from 'path'
import * as fs from 'fs';

module.exports = app => {
  const exports = {} as any;

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    },
    injectCss: true,
    injectRes:[
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css'
      },
      {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js'
      }
    ]
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.appDir, 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.appDir, 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'locals',
    'access'
  ];

  exports.security = {
    csrf: {
      ignoreJSON: false,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
      headerName: 'x-csrf-token'
    },
    xframe: {
      enable: false,
    },
  };

  exports.container = {
    ignore: [
      '**/web/**',
    ]
  };

  return exports;
};
