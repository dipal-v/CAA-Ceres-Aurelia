var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  scss: 'styles/**/*.scss',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  unittestSrc: 'test/unit/*.ts',
  dtsSrc: [
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts'
  ],
	generatorBase: 'ceres-generator/generators/app/templates/',
	generatorApp: 'ceres-generator/generators/app/templates/app',
	generatorCeres: 'ceres-generator/generators/app/templates/ceres'
};
