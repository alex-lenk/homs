import browsersync from "browser-sync";
import { paths } from "./config.mjs";

const browserSync = () => {
    browsersync.init({
        server: {
            baseDir: paths.dist,
        },
        port: 3224,
        notify: false,
    });
}

export default browserSync;
