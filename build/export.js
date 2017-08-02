// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'styles/main.css',
    'images/**',
    'fonts/icomoon.woff',
    'fonts/icomoon.ttf',
    'jspm_packages/npm/aurelia-permission@0.5.0.js',
    'jspm_packages/npm/aurelia-permission@0.5.0/*',
    'jspm_packages/github/systemjs/**',
    'jspm_packages/npm/aurelia-pager@0.1.1/**',
    'jspm_packages/npm/ag-grid@11.0.0/dist/styles/ag-grid.css',
    'jspm_packages/npm/ag-grid@11.0.0/dist/styles/theme-fresh.css',
    'jspm_packages/npm/font-awesome@4.6.3/css/font-awesome.min.css'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ],  [
      'aurelia-permision', [
        '/*'
      ]
    ]
  ]
};
