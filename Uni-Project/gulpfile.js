// main module
import gulp from "gulp";
// import ways
import { path } from "./gulp/config/path.js";
// import main plagins
import { plugins } from "./gulp/config/plugins.js";

// passing value into global variable
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}

// importing tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

// watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, copy);
}

const mainTasks = gulp.parallel(copy, html);

// building scenario of comleting tasks
const dev = gulp.series(reset, mainTasks, watcher);

// completing default scenario
gulp.task('default', dev); 