var gulp = require('gulp'),      
    jshint = require('gulp-jshint'),        //js 和並用        
    imagemin = require('gulp-imagemin'),    //圖片壓縮用
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),        
    notify = require('gulp-notify'),     
    cache = require('gulp-cache'),          
    livereload = require('gulp-livereload'),//即時更新
    del = require('del'),
    watch = require('gulp-watch'),                   //刪除   
    uglify = require('gulp-uglify'),       //JS最簡壓縮用
    webserver = require('gulp-webserver'), //內建伺服器用
    // jade= require('gulp-jade-php'),     //php  用
    jade = require('gulp-jade'),           //html 用 
    compass = require('gulp-compass'),     //compass sass+ susy
    coffee = require('gulp-coffee');       //coffeescript


gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
         port: 80, 
      livereload: true,
    }));
});
gulp.task('jade', function() {
  gulp.src('app/jade/**/*.jade')
    .pipe(jade({
        locals: {
          title: 'OMG THIS IS THE TITLE'
        }
     }))
     .pipe(gulp.dest(''))
     .pipe(notify({ message: 'html task ok' }))
     .pipe(livereload());
});
gulp.task('coffee', function() { 
     gulp.src('app/coffeescripts/**/*.coffee') 
          .pipe(coffee()) 
          .pipe(concat('all.js'))
          .pipe(uglify())
          .pipe(gulp.dest('js'))
          .pipe(notify({ message: 'js task ok' }))
          .pipe(livereload());
});
gulp.task('compass', function() {
  gulp.src('app/sass/**/*.sass')
  .pipe(compass({
    config_file: 'app/sass/config.rb',
    css: '',
    sass: 'app/sass',
    sourcemap: true,
    style: 'compressed',
    comments: false,
    require: ['susy']
  }))
  .pipe(notify({ message: 'css task ok' }))
  .pipe(livereload());
  gulp.run('del');
});
// Images
gulp.task('images', function() {
  return gulp.src('app/images/**/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(livereload());
});
gulp.task('del', function(cb) {
    del([
        '.sass-cache'
    ], cb)
});
gulp.task('watch', function () { 
  gulp.watch('app/jade/**/*.jade', ['jade']);
  gulp.watch('app/sass/**/*.sass', ['compass']);
  gulp.watch('app/coffeescripts/**/*.coffee', ['coffee']);
  gulp.watch('app/images/**/*', ['images']);
  livereload.listen();
});
 // Default task
gulp.task('default', ['jade','compass','coffee','webserver','watch'], function() {
    
});

