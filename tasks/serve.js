var gulp = require('gulp');
var webserver = require('gulp-webserver');
var argv = require('yargs').argv;

gulp.task('serve', () => {
    if (typeof argv.run !== 'undefined') {
        console.log('Serving example: ' + argv.run);
        gulp.src(argv.run)
            .pipe(webserver({
                open: false
            }));
    }
});
