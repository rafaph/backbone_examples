'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var del = require('del');

gulp.task('clean:js', () => {
	if(typeof argv.ex !== 'undefined') {
		del.sync([
			argv.ex + '/static/js/**',
			'!' + argv.ex + '/static/js'
		]);
	}
});

gulp.task('build:js', ['clean:js'], () => {
    if(typeof argv.ex !== 'undefined') {
        var b = browserify({
            entries: argv.ex + '/assets/index.js',
            debug: false,
            // defining transforms here will avoid crashing your stream
            transform: [babelify]
        });

        return b.bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            // Add transformation tasks to the pipeline here.
            .pipe(uglify())
            .on('error', gutil.log)
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(argv.ex + '/static/js/'));
    }
});
