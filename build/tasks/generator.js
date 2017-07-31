const gulp = require('gulp');
const paths = require('../paths');
const vinylPaths = require('vinyl-paths');
const del = require('del');
var replace = require('gulp-replace');

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
	'protractor.conf.js',
	'tsconfig.e2e.json',
	'tsconfig.json',
	'tslint.json',
	'typings.json',
	'wallaby.js'
];

gulp.task('generator-copy', function(){
	gulp.src(srcs, {base: '.'}).pipe(gulp.dest(paths.generatorBase));
    return gulp.src('package.json', {base: '.'})
        .pipe(replace(/caa\-ceres\-aurelia/, '<%= scriptAppName %>'))
        .pipe(gulp.dest(paths.generatorBase));

});

gulp.task('clean-generator', function(){
	return gulp.src(paths.generatorBase)
		.pipe(vinylPaths(del));
});

gulp.task('generator', ['generator-copy'], function(){
	
});
