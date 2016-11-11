var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
var mincss = require('gulp-clean-css');
var minjs = require('gulp-uglify');
// var browserSync = require("browser-sync");
var data = require('gulp-data');
var path = require('path');

gulp.task('default',['watch'],function(){
});
gulp.task('watch',function(){
	gulp.watch('less/*.less',['less']);
	gulp.watch('jade/homepage.jade',['json-test']);
	gulp.watch('jade/buy.jade',['buy-json']);
	gulp.watch('jade/membercenter.jade',['membercenter-json']);
	gulp.watch('jade/buy1.jade',['buy1-json']);
    gulp.watch('jade/factory.jade',['factory']);
    gulp.watch('jade/factorygo.jade',['factorygo']);
	gulp.watch('jade/aboutus.jade',['aboutus']);
	gulp.watch('js/*.js',['minjs']);
})
gulp.task('less',function(){
	gulp.src('less/*.less')
	.pipe(less())
	.pipe(mincss())
	.pipe(gulp.dest('css/'))
});
gulp.task('jade',function(){
	gulp.src('jade/*.jade')
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest('html/'))
});
gulp.task('factory',function(){
    gulp.src('jade/factory.jade')
    .pipe(jade({
        pretty:true
    }))
    .pipe(gulp.dest('html/'))
});
gulp.task('factorygo',function(){
    gulp.src('jade/factorygo.jade')
    .pipe(jade({
        pretty:true
    }))
    .pipe(gulp.dest('html/'))
});
gulp.task('aboutus',function(){
	gulp.src('jade/aboutus.jade')
	.pipe(jade({
		pretty:true
	}))
	.pipe(gulp.dest('html/'))
});
gulp.task('minjs',function(){
	gulp.src('js/*.js')
	.pipe(gulp.dest('newjs/'))
});
gulp.task('json-test', function() {
    gulp.src('jade/homepage.jade')
    .pipe(data(function(file) {
      return require(__dirname + "/data/homepage.json");
    }))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('html/'));
});
gulp.task('membercenter-json', function() {
    gulp.src('jade/membercenter.jade')
    .pipe(data(function(file) {
      return require(__dirname + "/data/membercenter.json");
    }))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('html/'));
});
gulp.task('buy-json', function() {
    gulp.src('jade/buy.jade')
    .pipe(data(function(file) {
      return require(__dirname + "/data/buy.json");
    }))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('html/'));
});
gulp.task('buy1-json', function() {
    gulp.src('jade/buy1.jade')
    .pipe(data(function(file) {
      return require(__dirname + "/data/buy1.json");
    }))
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('html/'));
});