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
        context: 'projects/${projectName}/_stylesheets',
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
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'home/activated/bundle.css${version}']
      },
      nonactivated: {
        _metaInfo: {
          version: ''
        },
        match: /^\/home\/nonactivated(\/)?/,
        // entry point, must be string.
        entry: './projects/home/nonactivated/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'home/nonactivated/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'home/nonactivated/bundle.css${version}']
      },
      introduction: {
        _metaInfo: {
          version: ''
        },
        match: /^\/home\/introduction(\/)?/,
        // entry point, must be string.
        entry: './projects/home/introduction/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'home/introduction/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'home/introduction/bundle.css${version}']
      }
    },

    // ${projectName}, project layers, Note for webpack optimze suggestion,
    // if we have some submodule in projecet (multi) page, we need to attach submodule
    // into this project as multi entry points.
    activating: {
      // the project meta config.
      _metaInfo: {
        version: ''
      },
      activating_result: {
        _metaInfo: {
          version: ''
        },
        match: /^\/activating\/result(\/)?/,
        // entry point, must be string.
        entry: './projects/activating/activating_result/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'activating/activating_result/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'activating/activating_result/bundle.css${version}']
      },
      step1: {
        _metaInfo: {
          version: ''
        },
        match: /^\/activating\/step1(\/)?/,
        // entry point, must be string.
        entry: './projects/activating/step1/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'activating/step1/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'activating/step1/bundle.css${version}']
      },
      step2: {
        _metaInfo: {
          version: ''
        },
        match: /^\/activating\/step2(\/)?/,
        // entry point, must be string.
        entry: './projects/activating/step2/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'activating/step2/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'activating/step2/bundle.css${version}']
      },
      step3: {
        _metaInfo: {
          version: ''
        },
        match: /^\/activating\/step3(\/)?/,
        // entry point, must be string.
        entry: './projects/activating/step3/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'activating/step3/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'activating/step3/bundle.css${version}']
      }
    },

    payment: {
      // the project meta config.
      _metaInfo: {
        version: ''
      },
      pieces_pay: {
        _metaInfo: {
          version: ''
        },
        match: /^\/payment\/pieces_pay(\/)?/,
        // entry point, must be string.
        entry: './projects/payment/pieces_pay/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'payment/pieces_pay/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'payment/pieces_pay/bundle.css${version}']
      },
      refund_pay: {
        _metaInfo: {
          version: ''
        },
        match: /^\/payment\/refund_pay(\/)?/,
        // entry point, must be string.
        entry: './projects/payment/refund_pay/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'payment/refund_pay/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'payment/refund_pay/bundle.css${version}']
      },
      payment_result: {
        _metaInfo: {
          version: ''
        },
        match: /^\/payment\/result(\/)?/,
        // entry point, must be string.
        entry: './projects/payment/payment_result/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'payment/payment_result/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'payment/payment_result/bundle.css${version}']
      }
    },
    purchase: {
      // the project meta config.
      _metaInfo: {
        version: ''
      },
      baitiao: {
        _metaInfo: {
          version: ''
        },
        match: /^\/purchase\/baitiao(\/)?/,
        // entry point, must be string.
        entry: './projects/purchase/baitiao/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'purchase/baitiao/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'purchase/baitiao/bundle.css${version}']
      },
      bindcard: {
        _metaInfo: {
          version: ''
        },
        match: /^\/purchase\/bindcard(\/)?/,
        // entry point, must be string.
        entry: './projects/purchase/bindcard/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'purchase/bindcard/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'purchase/bindcard/bundle.css${version}']
      },
      bindcard_result: {
        _metaInfo: {
          version: ''
        },
        match: /^\/purchase\/result(\/)?/,
        // entry point, must be string.
        entry: './projects/purchase/bindcard_result/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'purchase/bindcard_result/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'purchase/bindcard_result/bundle.css${version}']
      }
    },

    repayment: {
      // the project meta config.
      _metaInfo: {
        version: ''
      },
      detail: {
        _metaInfo: {
          version: ''
        },
        match: /^\/repayment\/detail(\/)?/,
        // entry point, must be string.
        entry: './projects/repayment/detail/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'repayment/detail/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'repayment/detail/bundle.css${version}']
      },
      repayment_result: {
        _metaInfo: {
          version: ''
        },
        match: /^\/repayment\/result(\/)?/,
        // entry point, must be string.
        entry: './projects/repayment/repayment_result/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'repayment/repayment_result/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'repayment/repayment_result/bundle.css${version}']
      }
    },

    drawback: {
      // the project meta config.
      _metaInfo: {
        version: ''
      },
      detail: {
        _metaInfo: {
          version: ''
        },
        match: /^\/drawback\/detail(\/)?/,
        // entry point, must be string.
        entry: './projects/drawback/detail/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'drawback/detail/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'drawback/detail/bundle.css${version}']
      },
      drawback_result: {
        _metaInfo: {
          version: ''
        },
        match: /^\/drawback\/result(\/)?/,
        // entry point, must be string.
        entry: './projects/drawback/drawback_result/index.js',
        jsBundles: ['http://localhost:4002/public/vendors/esshim/es5-shim.min.js', 'http://localhost:4002/public/vendors/jquery/jquery.min.js', 'drawback/drawback_result/bundle.js${version}'],
        cssBundles: ['http://localhost:4002/public/styles/common.css', 'drawback/drawback_result/bundle.css${version}']
      }
    }

  }
};
