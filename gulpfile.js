const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


gulp.task('message', async function(){
    return console.log('Gulp is running....');
});


// minify html
gulp.task('copyHtml', async function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});


// minify js
gulp.task('minify', async function(){
    gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

// compile sass
gulp.task('sass', async function(){
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// scripts
gulp.task('scripts', async function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', gulp.series('message', 'copyHtml', 'sass', 'scripts'));


gulp.task('watch', async function(){
        gulp.watch('src/js/*.js', gulp.series('scripts'));
        gulp.watch('src/sass/*.scss', gulp.series('sass'));
        gulp.watch('src/*.html', gulp.series('copyHtml'));
});