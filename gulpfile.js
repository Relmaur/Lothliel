const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss"); // The css-purge plugin.

function buildStyles() {
  return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] })) // This is to purge the non-used css files on the output file (index.css)
    .pipe(dest("css"));
}

function watchTask() {
  watch(["scss/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
