const gulp = require('gulp');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
var fs = require('fs');
var package_json = JSON.parse(fs.readFileSync('./package.json'));


gulp.task('distribute', ['export'], function(){
	gulp.src('export/*')
		.pipe(tar(package_json.name + '-' + package_json.version + '.tar'))
		.pipe(gzip())
		.pipe(gulp.dest('.'))
});
