var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('watch-sass', function(){ // Создаем таск Sass
	return gulp.src('static/app/sass/**/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('static/css')) // Выгружаем результата в папку app/css
});

gulp.task('css-build', ['watch-sass'], function() {
    return gulp.src([
        'static/css/main.css',
        'static/css/libs.css'
    ])
        .pipe(cssnano()) // Сжимаем
        .pipe(gulp.dest('static/css')); // Выгружаем в папку app/css
});

gulp.task('watch-js', function () {
	return gulp.src('static/app/js/**/*.js')
		.pipe(gulp.dest('static/js'))
});

gulp.task('build-js', function () {
    gulp.src('static/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
});

gulp.task('img', function() {
    return gulp.src('static/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
            // .pipe(imagemin({ // Сжимаем изображения без кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('static/img')); // Выгружаем на продакшен
});



gulp.task('watch', ['watch-sass','watch-js'], function() {
	gulp.watch('static/app/sass/**/*.sass', ['watch-sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('static/app/js/**/*.js', ['watch-js']);   // Наблюдение за JS файлами в папке js
});

gulp.task('build', ['img','watch-sass', 'watch-js', 'build-js', 'css-build'], function() {

	var buildFonts = gulp.src('static/app/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('static/fonts'))

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
});

gulp.task('default', ['watch']);
