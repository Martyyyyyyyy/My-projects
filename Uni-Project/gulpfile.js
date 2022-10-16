// main module
import gulp from "gulp";
// import ways
import { path } from "./gulp/config/path.js";
// import main plagins
import { plugins } from "./gulp/config/plugins.js";

// passing value into global variable
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins
}

// importing tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { ftp } from "./gulp/tasks/ftp.js";

// watcher for changes in files
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgSprive }

// main tasks
const mainTasks = gulp.parallel(copy, scss, js, images); 

// building scenario of comleting tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// export scenarios
export { dev }
export { build }
export { deployFTP }

// completing default scenario
gulp.task('default', dev); 