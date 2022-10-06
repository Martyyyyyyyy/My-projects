// getting a folder's project name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // you can also use rootFolder
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/image/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  }, 
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/image/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`, // pug
    files: `${srcFolder}/files/**/*.*`,
  }, 
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`, // pug
    images: `${srcFolder}/image/**/*.{jpg, jpeg, png, svg, gif, ico, webp}`, 
    files: `${srcFolder}/files/**/*.*`, 
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}