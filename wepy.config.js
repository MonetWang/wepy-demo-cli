const ENV = require('./src/env/index').envConfig;
const path = require('path');
var prod = process.env.NODE_ENV === 'prod';

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {
    web: {
      htmlTemplate: path.join('src', 'index.template.html'),
      htmlOutput: path.join('web', 'index.html'),
      jsOutput: path.join('web', 'index.js')
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    // less: {
    //   compress: prod
    // },
    sass: {
      outputStyle: 'compressed'
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions',
        "syntax-export-extensions"
      ]
    }
  },
  plugins: {
    replace: {
      filter: /\.js$/,
      config: {
        find: /BASE_API/,
        replace: function(matchs, word) {
          return ENV.api;
        }
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  // 压缩sass
  module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    },
    replace: {
      filter: /\.js$/,
      config: {
        find: /BASE_API/,
        replace: function(matchs, word) {
          return ENV.api;
        }
      }
    }
  }
}
