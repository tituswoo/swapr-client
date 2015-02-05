/**
 * Created by Vaughan on 2/5/2015.
 */

var gulp = require('gulp');
var extreplace = require('gulp-ext-replace');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var install = require('gulp-install');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('sass', function() {
   return sass('app/**/*.scss')
       .pipe(extreplace('.css'))
       .pipe(minifyCSS())
       .pipe(gulp.dest('dist/'));
});

gulp.task('install', function() {
   gulp.src(['./bower.json', './package.json'])
       .pipe(install());
});

