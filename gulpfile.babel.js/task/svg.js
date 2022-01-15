import gulp from "gulp";

//config
import path from "../config/path.js";
import app from "../config/app.js";

//plugins
import loadPlugins from "gulp-load-plugins";

const gp = loadPlugins();

export default () => {
    return gulp.src(path.svg.src)
        .pipe(gp.plumber({
            errorHandler: gp.notify.onError(error => ({
                title: "SVG",
                message: error.message
            }))
        }))
        .pipe(gp.svgmin(app.spriteSvg.svgmin))
        .pipe(gp.cheerio(app.spriteSvg.cheerio))
        .pipe(gp.replace('&gt;', '>'))
        .pipe(gp.svgSprite(app.spriteSvg.svgSprite))
        .pipe(gulp.dest(path.svg.dest))
}