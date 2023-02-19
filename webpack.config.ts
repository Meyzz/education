import webpack from "webpack";
import {getBuildWebpackConfig} from "./config/build/getBuildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html")
};

const mode = 'development';

const isDev = mode === 'development';

const config: webpack.Configuration = getBuildWebpackConfig({
    mode: "development",
    paths,
    isDev,
});

export default config;