
import gulp from 'gulp';
import sync from 'browser-sync';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';



export const html = () => {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(sync.stream());
}

export const style = () => {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ cascade: true }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(sync.stream());
}

export const script = () => {
	return gulp.src('src/scripts/main.js')
		.pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
		.pipe(sync.stream());
}


export const copy = () => {
	return gulp.src([ 'src/images/**/*'])
		.pipe(gulp.dest('dist/images/'))
		.pipe(sync.stream({
			once: true
		}));
}


export const browserSync = () => {
	sync.init({
		ui: false,
		notify:  false,
		server:{
			baseDir: 'dist'
		}
	});
}



export const watch = () => {
	gulp.watch('src/*.html', gulp.series(html));
	gulp.watch('src/scripts/**/*.js', gulp.series(script));
	gulp.watch('src/sass/**/*.scss', gulp.series(style));
	gulp.watch([ 'src/images/**/*', 'src/fonts/**/*'], gulp.series(copy));	
}


export default gulp.series(
	gulp.parallel(html, style, script, copy),
	gulp.parallel(watch,  browserSync)
);