import news from "../data/news.json";

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    pug: {
        pretty: isDev,
        data: {
            news: news
        }
    },
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    },
    loadPlugins: {
        postRequireTransforms: {
            sass: function (sass) {
                return sass(require('sass'));
            }
        }
    },
    scssPaths: {
        includePaths: ["node_modules/bootstrap/scss"]
    },
    spriteSvg: {
        svgmin: {
            js2svg: {
                pretty: true
            }
        },
        cheerio: {
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        },
        svgSprite: {
            mode: {
                symbol: {
                    sprite: "sprite.svg",
                }
            }
        }
    }
}