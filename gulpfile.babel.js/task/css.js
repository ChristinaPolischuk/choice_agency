import gulp from "gulp";

//config
import path from "../config/path";
import app from "../config/app";

//plugins
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

export default () => {
    return gulp.src(path.css.src, {sourcemaps: app.isDev})
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe(gp.concat("main.css"))
        .pipe(gp.cssimport())
        .pipe(gp.webpCss())
        .pipe(gp.autoprefixer())
        .pipe(gp.shorthand())
        .pipe(gp.groupCssMediaQueries())
        .pipe(gp.size({title: "main.css"}))
        .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}))
        .pipe(gp.rename({suffix: ".min"}))
        .pipe(gp.csso())
        .pipe(gp.size({title: "main.min.css"}))
        .pipe(gp.dest(path.css.dest, {sourcemaps: app.isDev}))
}