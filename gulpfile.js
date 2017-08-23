const gulp = require('gulp');
const vinylPaths = require('vinyl-paths');
const del = require('del');
var path = require('path');
var replace = require('gulp-replace');


const paths = {
  generatorBase: 'ceres-generator/generators/app/templates/',
  generatorApp: 'ceres-generator/generators/app/templates/app',
  generatorCeres: 'ceres-generator/generators/app/templates/ceres'
}

const srcs = [
  'fonts/**/*',
  'images/**/*',
  'src/**/*',
  '!src/app.ts',
  'static/*',
  'styles/**/*',
  'test/**/*',
  '!test/unit/app.spec.ts',
  '.editorconfig',
  '.gitignore',
  '.npmignore',
  'config.js',
  'docker-compose.yml',
  'dockerfile',
  'Dockerfile.development',
  'index.ejs',
  'package.json',
  'package-scripts.js',
  'README.md',
  'tsconfig.json',
  'tslint.json',
  'wallaby.js',
  'webpack.config.js'
];


gulp.task('generator-copy', function(){
  gulp.src(srcs, {base: '.'}).pipe(gulp.dest(paths.generatorBase));
  gulp.src('package.json', {base: '.'})
    .pipe(replace(/caa\-ceres\-aurelia/, '<%= scriptAppName %>'))
    .pipe(gulp.dest(paths.generatorBase));
  gulp.src(path.join('src', 'app.ts'), {base: '.'})
    .pipe(replace(/CAA-Ceres-Aurelia/, '<%= appTitle %>'))
    .pipe(gulp.dest(paths.generatorBase));
  gulp.src(path.join('test', 'unit', 'app.spec.ts'), {base: '.'})
    .pipe(replace(/CAA-Ceres-Aurelia/, '<%= appTitle %>'))
    .pipe(gulp.dest(paths.generatorBase));

});

gulp.task('clean-generator', function(){
    return gulp.src(paths.generatorBase)
        .pipe(vinylPaths(del));
});

gulp.task('default', ['generator-copy'], function(){
    
});
