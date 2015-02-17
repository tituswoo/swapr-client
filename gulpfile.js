/**
 * Created by Vaughan on 2/5/2015.
 */

var gulp = require('gulp');
var extreplace = require('gulp-ext-replace');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var install = require('gulp-install');
var copy = require('gulp-copy');
var gulpDeleted = require('gulp-deleted');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('default', function() {
    // place code for your default task here
});

//TODO: Fix bugs
gulp.task('sass', function() {
    return gulp.src('**/*.scss', {cwd: 'app/'})
       .pipe(copy('dist/'))
       .pipe(sass('dist/**/*.scss'))
       .pipe(extreplace('.css'))
       .pipe(minifyCSS())
       .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function() {
   return gulp.src(['**/*','!**/*.scss','app/bower_components/bootstrap-sass-official/assets/'], {cwd: 'app/'} )
       .pipe(copy('dist/'));
});

gulp.task('clean', function() {
    return gulp.src('app/')
        .pipe( gulpDeleted('dist/', ["**/*"]));
});

//TODO: only listens once, then stops
gulp.task('watch', function() {
    watch('app/**', batch(function() {
        gulp.start('copy', 'sass');
    }));
});

gulp.task('install', function() {
   gulp.src(['bower.json', 'package.json'], {cwd: 'app/'})
       .pipe(install());
});

