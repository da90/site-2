var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvar = require("postcss-simple-vars"),
cssnest = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

gulp.task("styles", function() {
  /*return async function (gulp.src)*/
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssimport, mixins, cssnest, autoprefixer, hexrgba, cssvar]))
  .on("error", function(e) {
    console.log(e.toString());
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
