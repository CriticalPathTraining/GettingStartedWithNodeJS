var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');


gulp.task('clean', function () {
  console.log("Running clean task");
  return gulp.src('dist/', { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task('build', gulp.series('clean', function () {
  console.log("Running build task");

  gulp.src('src/**/*.html').pipe(gulp.dest('dist'));
  gulp.src('src/css/**/*.css').pipe(gulp.dest('dist/css'));
  gulp.src('src/css/img/**/*.png').pipe(gulp.dest('dist/css/img'));

  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.', { sourceRoot: './', includeContent: false }))
    .pipe(gulp.dest("."));

}));

gulp.task('start', gulp.series('build', function () {
  console.log("Running start  task");
  return browserSync.init({ server: { baseDir: 'dist' } });
}));

gulp.task('refresh', gulp.series('build', function () {
  console.log("Running refresh task");
  return browserSync.reload();
}));

gulp.task('serve', gulp.series('start', function () {
  console.log("Running serve task");
  gulp.watch("src/**/*", ['refresh']);
}));