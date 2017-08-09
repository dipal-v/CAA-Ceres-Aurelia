module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "aurelia-http-client",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "jquery",
        "homefront",
        "aurelia-datatable",
        "[aurelia-datatable/**/*.js]",
        "aurelia-datatable/**/*.html!text",
        "aurelia-pager",
        "moment",
        "ag-grid",
        "ag-grid/dist/styles/ag-grid.css!text",
        "ag-grid/dist/styles/theme-fresh.css!text",
        "font-awesome/css/font-awesome.min.css!text",
        "ag-grid-aurelia",
        "extend"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
