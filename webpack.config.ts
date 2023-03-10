import webpack from "webpack";
import {getBuildWebpackConfig} from "./config/build/getBuildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html")
};

export default (env: BuildEnv): webpack.Configuration => {
    const PORT = env.port || 3000;

    const mode = env.mode || 'development';

    const isDev = mode === 'development';

    return getBuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
};