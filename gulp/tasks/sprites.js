var gulp = require("gulp"),
svg = require("gulp-svg-sprites");
var c = {
    mode: {
      css: {
        render: {
          css: {
            template: "./gulp/templates/sprite.css"
          }
        }
      }
    }
};

gulp.task("createSprite", function() {
  return gulp.src("./app/assets/images/icons/**/*.svg")
    .pipe(svg(c))
    .pipe(gulp.dest("./app/temp/sprite/"));
});
