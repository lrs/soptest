const gulp       = require('gulp');
const browserify = require('browserify');
const tsify      = require('tsify');
const source     = require('vinyl-source-stream');

gulp.task('ts', () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: './src/app.tsx',
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('./app.js'))
        .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('static', () => {
    return gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['ts', 'static']);
