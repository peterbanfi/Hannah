const gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglifyes = require('uglify-es');
composer = require('gulp-uglify/composer');

const uglify = composer(uglifyes, console);

gulp.task('connect', function () {
    connect.server({
        livereload: true,
        port: 8080,
    });
});

var vendorStyles = [];

var vendorScripts = [];


gulp.task('styles', function () {
    gulp
        .src('docs/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('docs/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    gulp
        .src('docs/scripts/*.js')
        .pipe(plumber())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('docs/scripts/minified'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp
        .src('docs/*.html')
        .pipe(plumber())
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch(['docs/*.html'], ['html']);
    gulp.watch(['docs/scss/**/*.scss'], ['styles']);
    gulp.watch(['docs/scripts/*.js'], ['scripts']);
});


gulp.task('default', ['connect', 'styles', 'scripts', 'html', 'watch']);