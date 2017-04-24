var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvar = require("postcss-simple-vars"),
cssnest = require("postcss-nested"),
cssimport = require("postcss-import");

gulp.task("styles", function() {
  /*return async function (gulp.src)*/
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssimport, cssnest, autoprefixer, cssvar]))
  .on("error", function(e) {
    console.log(e.toString());
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
