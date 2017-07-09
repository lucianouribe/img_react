var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// convierte el css en css con todas las excepciones
gulp.task('styles', function(){
  gulp.src('./app/assets/stylesheetsA/*.scss').pipe(autoprefixer()).pipe(gulp.dest('./app/assets/stylesheets'))
});

// automaticamente llama al task styles cada que se cambia algo en StylesheetsA
gulp.task('watch', function(){
  gulp.watch('./app/assets/stylesheetsA/*.scss', ['styles']);
});
