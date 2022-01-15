import del from "del";

//config
import path from "../config/path.js";

//remove directory
export default () => {
    return del(path.root);
}