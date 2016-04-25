var gulp = require('gulp');
var pkg = require('./package.json');
var $ = require('gulp-load-plugins')();

var paths = {
    DEPLOYMENT_FOLDER: 'deployment',
    APP_FOLDER: 'app'
};
gulp.task('clean', function () {
    return gulp.src(paths.DEPLOYMENT_FOLDER)
        .pipe($.clean());
});

gulp.task('compile:js', function () {
    return gulp.src(paths.APP_FOLDER + '/**/*.js')
        .pipe($.ngAnnotate())
        .pipe($.concat('all.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(paths.DEPLOYMENT_FOLDER + '/js'));
});

gulp.task('ngTemplates', function () {
    var templateCache = require('gulp-angular-templatecache');

    return gulp.src(paths.APP_FOLDER + '/**/*.html')
        .pipe($.angularTemplatecache({
            root: paths.APP_FOLDER,
            module: pkg.name + '.templates'
        }))
        .pipe(gulp.dest(paths.DEPLOYMENT_FOLDER));
});

gulp.task('build',['compile:js', 'ngTemplates'], function () {

});

gulp.task('default',['clean'], function () {
    return gulp.start('build');
});
