import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {getBuildLoaders} from "./getBuildLoaders";
import {getBuildResolvers} from "./getBuildResolvers";
import {getBuildPlugins} from "./getBuildPlugins";

export function getBuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    return {
        mode,
        module: {
            rules: getBuildLoaders(),
        },
        resolve: getBuildResolvers(),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: getBuildPlugins(options)
    }
}