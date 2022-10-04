import replace from "gulp-replace"; // for search and change
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";

// export the object
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync
}