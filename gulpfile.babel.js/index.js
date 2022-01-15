import gulp from "gulp";
import browserSync from "browser-sync";

//config
import path from "./config/path.js";
import app from "./config/app.js";

//tasks
import clear from "./task/clear.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import libsCss from "./task/libsCss.js";
import js from "./task/js";
import libsJs from "./task/libsJs";
import copyJQuery from "./task/copyJQuery";
import img from "./task/img.js";
import svg from "./task/svg.js";
import font from "./task/font";

//server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

//watch files
const watcher = () => {
    gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.svg.watch, svg).on("all", browserSync.reload);
    gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

const build = gulp.series(
    clear,
    gulp.parallel(pug, scss, libsCss, font, img, svg, js, libsJs, copyJQuery)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

//tasks
export {pug};
export {scss};
export {libsCss};
export {js};
export {libsJs};
export {copyJQuery};
export {img};
export {svg};
export {font};

//setting-up
export default app.isProd
    ? build
    : dev;

console.log(process.argv);