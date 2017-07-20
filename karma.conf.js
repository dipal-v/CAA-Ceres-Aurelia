var fs  = require("fs");

function filter(configJs){
    var output = './out.' + configJs;
    if (fs.existsSync(output)){
        fs.unlink(output);
    }
    fs.readFileSync(configJs).toString().split('\n').forEach(function (line) {
        if(line.indexOf('"*": "./dist/*"') == -1){
            fs.appendFileSync(output, line.toString() + "\n");
        }else{
            console.log(line);
        }
    });
    return output;
}

module.exports = function(config) {
    var new_config = filter('config.js');
    config.set({
    basePath: './',
    frameworks: ['systemjs', 'jasmine'],
    systemjs: {
    configFile: new_config,
      config: {
        paths: {
          "typescript": "node_modules/typescript/lib/typescript.js",
          "systemjs": "node_modules/systemjs/dist/system.js",
          'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
          'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
        packages: {
          'test/unit': {
            defaultExtension: 'ts'
          },
          'src': {
            defaultExtension: 'ts'
          }
        },
        transpiler: 'typescript',
        typescriptOptions : {
          "module": "amd",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true
        }
      },
      serveFiles: [
        'src/**/*.ts',
        'src/*.ts',
        'jspm_packages/**/*.js'
      ]
    },
    files: [
      'test/unit/setup.ts',
      'test/unit/*.ts'
    ],
    exclude: [],
    preprocessors: { },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });

};
