const gulp = require('gulp');
const paths = require('../paths');
const vinylPaths = require('vinyl-paths');
const del = require('del');

const srcs = [
	'src/**/*',
	'images/**/*',
	'build/**/*',
	'fonts/**/*',
	'styles/**/*',
	'test/**/*',
	'.editorconfig',
	'.gitignore',
	'.npmignore',
	'config.js',
	'dockerfile',
	'favicon.ico',
	'gulpfile.js',
	'index.html',
	'index.js',
	'karma.conf.js',
	'package.json',
	'protractor.conf.js',
	'tsconfig.e2e.json',
	'tsconfig.json',
	'tslint.json',
	'typings.json',
	'wallaby.js'
];

gulp.task('generator-copy', function(){
	return gulp.src(srcs, {base: '.'}).pipe(gulp.dest(paths.generatorBase));
});

gulp.task('clean-generator', function(){
	return gulp.src(paths.generatorBase)
		.pipe(vinylPaths(del));
});

gulp.task('generator', ['generator-copy'], function(){
	
});
