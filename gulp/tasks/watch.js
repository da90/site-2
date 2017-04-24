var gulp = require("gulp"),
watch = require("gulp-watch"),
syncbrowser = require("browser-sync").create();

gulp.task("watch", function() {

  syncbrowser.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", function() {
    syncbrowser.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("injectCss")
  });
});

/*2nd argument is a dependency task. it HAS to run first which will gen the css file */
gulp.task("injectCss", ["styles"], function() {
   return gulp.src("./app/temp/styles/styles.css")
   .pipe(syncbrowser.stream());
});
