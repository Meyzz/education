import {BuildOptions} from "./types/config";
import type {Configuration} from 'webpack-dev-server';

export function getBuildDevServer(options: BuildOptions): Configuration{
    return {
        port: options.port,
        historyApiFallback: true,
    }
}