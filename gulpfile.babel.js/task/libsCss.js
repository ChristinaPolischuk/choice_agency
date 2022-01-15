import gulp from "gulp";

//config
import path from "../config/path";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
    return gulp.src("node_modules/normalize.css/normalize.css")
        .pipe(gp.csso())
        .pipe(gp.concat("libs.min.css"))
        .pipe(gulp.dest(path.cssLibs.dest))
}