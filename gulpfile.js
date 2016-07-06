'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./client/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            //cascade: false,
            remove: false
        }))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('sass-auto-prefixer', function () {
    return gulp.src('client/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    gulp.run('sass');
    gulp.watch('./client/scss/**/*.scss',  ['sass']);
});