var g = require ("gulp"),
w = require("webpack");
g.task("scripts", function(callback) {
  w(require("../../webpack.config.js"), function(e, stats) {
    if (e) {
      console.log(e.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
