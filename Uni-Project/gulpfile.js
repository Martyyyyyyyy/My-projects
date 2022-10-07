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
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

// watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, copy);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgSprive }

// main tasks
const mainTasks = gulp.parallel(copy, html, scss, js, images); 

// building scenario of comleting tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// completing default scenario
gulp.task('default', dev); 