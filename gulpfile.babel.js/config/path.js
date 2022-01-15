const pathSrc = "./src";
const pathDest = "./public";

export default {
    root: pathDest,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },
    pug: {
        src: pathSrc + "/pug/index.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },
    cssLibs: {
        dest: pathDest + "/css/libs"
    },
    scss: {
        src: pathSrc + "/scss/*.{sass,scss}",
        watch: pathSrc + "/scss/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    libsJs: {
        dest: pathDest + "/js/libs"
    },
    copyJQuery: {
        dest: pathDest + "/js/libs"
    },
    img: {
        src: [`${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`, `!${pathSrc}/img/sprite/*.svg`],
        watch: [`${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`, `!${pathSrc}/img/sprite/*.svg`],
        dest: pathDest + "/img"
    },
    svg: {
        src: pathSrc + "/img/sprite/*.svg",
        watch: pathSrc + "/img/sprite/*.svg",
        dest: pathDest + "/img/sprite"
    },
    font: {
        src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/fonts"
    }
}