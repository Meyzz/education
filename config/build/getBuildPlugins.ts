import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function getBuildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [new HTMLWebpackPlugin({template: paths.html}), new webpack.ProgressPlugin()]
}