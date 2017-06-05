var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// convierte el css en css con todas las excepciones
gulp.task('styles', function(){
  gulp.src('./app/assets/stylesheets/equilibrio.scss').pipe(autoprefixer()).pipe(gulp.dest('gulpStyles'))
});

// lo vuelve un task cada cierto tiempo
gulp.task('watch', function(){
  gulp.watch('./app/assets/stylesheets/calculator.scss', ['styles']);
});
