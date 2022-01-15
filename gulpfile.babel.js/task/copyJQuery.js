import gulp from "gulp";

//config
import path from "../config/path";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
    return gulp.src("node_modules/jquery/dist/jquery.js")
        .pipe(gp.rename({suffix: ".min"}))
        .pipe(gp.uglify())
        .pipe(gulp.dest(path.copyJQuery.dest))
}