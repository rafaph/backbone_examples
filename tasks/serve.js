var gulp = require('gulp');
var webserver = require('gulp-webserver');
var argv = require('yargs').argv;

gulp.task('serve', ['clean:js', 'build:js'], () => {
    if (typeof argv.ex !== 'undefined') {
        console.log('Serving example: ' + argv.ex);
        gulp.src(argv.ex)
            .pipe(webserver({
                open: false,
                host: '0.0.0.0'
            }));
    }
});
