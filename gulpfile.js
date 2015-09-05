// npm install gulp-jshint gulp-imagemin gulp-rename gulp-concat gulp-notify gulp-cache gulp-livereload del gulp-watch gulp-uglify gulp-webserver gulp-jade-php gulp-jade gulp-compass gulp-coffee --save-dev
var gulp = require('gulp'),      
    jshint = require('gulp-jshint'),        //js 合並用        
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
    coffee = require('gulp-coffee'),       //coffeescript
    react = require('gulp-babel');     //babel

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
          .pipe(uglify())
          .pipe(gulp.dest(''))
          .pipe(notify({ message: 'js task ok' }))
          .pipe(livereload());
});
gulp.task('react', function() { 
     gulp.src('app/react/**/*.jsx') 
          .pipe(concat('js/all.jsx'))
          .pipe(react()) 
          .pipe(uglify())
          .pipe(gulp.dest(''))
          .pipe(notify({ message: 'Reactjs task ok' }))
          .pipe(livereload());
});
gulp.task('reactE', function() { 
     gulp.src('app/events/react/*.jsx') 
          .pipe(react()) 
          .pipe(uglify())
          .pipe(gulp.dest('events'))
          .pipe(notify({ message: 'ReactEjs task ok' }))
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
  gulp.watch('app/react/**/*.jsx', ['react']);
  gulp.watch('app/events/react/*.jsx', ['reactE']);
  gulp.watch('app/images/**/*', ['images']);
  livereload.listen();
});
 // Default task
gulp.task('default', ['jade','compass','coffee','react','reactE','webserver','watch'])

