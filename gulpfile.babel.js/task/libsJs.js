import gulp from "gulp";

//config
import path from "../config/path";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
    return gulp.src(["node_modules/svg4everybody/dist/svg4everybody.js", "node_modules/slick-carousel/slick/slick.js"])
        .pipe(gp.concat("libs.min.js"))
        .pipe(gp.uglify())
        .pipe(gulp.dest(path.libsJs.dest))
}