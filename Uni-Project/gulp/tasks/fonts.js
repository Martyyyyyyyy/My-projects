/*
import fs, { appendFile } from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  // find files .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      }))
    )
    // convert to .ttf
    .pipe(fonter({
      formats: ['ttf']
    }))
    // upload to source folder
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}
export const ttfToWoff = () => {
  // find files .ttf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      }))
    )
    // convert to .woff
    .pipe(fonter({
      formats: ['woff']
    }))
    // upload to source folder
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    // search for files with .ttf
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/*.ttf`))
    // convert to .woff2
    .pipe(ttf2woff2())
    // upload to source folder
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}
export const fontsStyle = () => {
  // file of styles 
  let fontFile = `${app.path.srcFolder}/scss/fonts.scss`;
  // checking if files exists
  fs.readdir(app.path.build.fonts, functions (err, fontsFiles), {
    if (fontsFiles) {
      // checking if files exists
      if (!fs.existsSync(fontFile)) {
        // if not we create a file
        fs.writeFile(fontFile, '', cb);
        let newFileOnly;
        for (var i = 0; i < fontsFiles.length; i++) {
          // write connection in style file
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] :fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] :fontFileName;
            if (fontWeight.toLowerCase() === 'thin') {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight') {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light') {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium') {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold') {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold') {
              fontWeight = 700;
            } else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black') {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }
            fs.appendFile(fontFile,
              `@font-face {
                  font-family: ${fontName};
                  font-display: swap;
                  src: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts${fontFileName}.woff");
                  font-weight: ${fontWeight};
                  font-style: normal;                  
                }\r\n`, cb);
            newFileOnly = fontFileName;
          }
        }
      } else {
        console.log("File scss/fonts.scss already exist. For updating file, u need to delete it");
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() { }
}
*/