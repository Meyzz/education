import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {getBuildLoaders} from "./getBuildLoaders";
import {getBuildResolvers} from "./getBuildResolvers";
import {getBuildPlugins} from "./getBuildPlugins";
import {getBuildDevServer} from "./getBuildDevServer";

export function getBuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options;

    return {
        mode,
        module: {
            rules: getBuildLoaders(options),
        },
        resolve: getBuildResolvers(),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: getBuildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? getBuildDevServer(options) : undefined
    }
}