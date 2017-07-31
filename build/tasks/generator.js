const gulp = require('gulp');
const paths = require('../paths');
const vinylPaths = require('vinyl-paths');
const del = require('del');
var path = require('path');
var replace = require('gulp-replace');

const srcs = [
    'src/**/*',
    '!src/app.ts',
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
    gulp.src('package.json', {base: '.'})
        .pipe(replace(/caa\-ceres\-aurelia/, '<%= scriptAppName %>'))
        .pipe(gulp.dest(paths.generatorBase));
    gulp.src('index.html', {base: '.'})
        .pipe(replace(/CAA-Ceres-Aurelia/, '<%= appTitle %>'))
        .pipe(gulp.dest(paths.generatorBase));
    gulp.src(path.join('src', 'app.ts'), {base: '.'})
        .pipe(replace(/CAA-Ceres-Aurelia/, '<%= appTitle %>'))
        .pipe(gulp.dest(paths.generatorBase));

});

gulp.task('clean-generator', function(){
    return gulp.src(paths.generatorBase)
        .pipe(vinylPaths(del));
});

gulp.task('generator', ['generator-copy'], function(){
    
});
