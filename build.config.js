var path = require('path');
module.exports = {
  // the optional configurations.
  options: {
    // the location related gruntfile of your projects root folder.
    // put web, admin into /projects/*
    projectRoot: './projects',

    devServer: {
      host: 'localhost',
      port: 3002,
      publicPath: 'http://localhost:3002/public/'
    },
    built: {
      // where the built files should be placed?
      baseDir: path.join(__dirname, 'public')
    },
    // assets public path (stylesheets,...)
    assets: {
      // the urlLoaderQuery used in buildtool/webpack.base.config.js <url-loader> config node.
      urlLoaderQuery: {
        context: 'projects/${projectName}/stylesheets',
        name: '${projectName}/[path][name].[ext]'
      },
      dev: 'http://localhost:3002/public/',
      prod: 'http://cdn.xx.com/public/'
    }
  },
  projects: {
    home: {
      _metaInfo: {
        version: ''
      },
      activated: {
        _metaInfo: {
          version: ''
        },
        match: /^\/home\/activated(\/)?/,
        // entry point, must be string.
        entry: './projects/home/activated/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'home/activated/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/shared/less/public/common.css', 'home/activated/bundle.css${version}']
      },
      nonactivated: {
         _metaInfo: {
          version: ''
        },
        match: /^\/home\/nonactivated(\/)?/,
        // entry point, must be string.
        entry: './projects/home/nonactivated/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'home/nonactivated/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/shared/less/public/common.css', 'home/nonactivated/bundle.css${version}']
      }
    },
    // ${projectName}, project layers, Note for webpack optimze suggestion,
    // if we have some submodule in projecet (multi) page, we need to attach submodule
    // into this project as multi entry points.
    activating: {
      // the project meta config.
      _metaInfo: {
        version: ''
      }
    },
    payment: {
      // the project meta config.
      _metaInfo: {
        version: ''
      }
    },
    purchase: {
      // the project meta config.
      _metaInfo: {
        version: ''
      }
    },
    repayment: {
      // the project meta config.
      _metaInfo: {
        version: ''
      }
    }
  }
};
