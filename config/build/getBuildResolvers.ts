import webpack from "webpack";

export function getBuildResolvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}