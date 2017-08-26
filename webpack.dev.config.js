const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'snackbar': './src/index.tsx'
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                include: [
                    path.resolve(__dirname, "src")
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1'
                ],
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ],
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    performance: {
        //hints: "warning",
        maxAssetSize: 2000000,
        maxEntrypointSize: 4000000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },

    devtool: "cheap-module-source-map",
    stats: 'verbose',
    devServer: {
        contentBase: 'public/',
        compress: true,
        port: 8087,
        noInfo: true,
        historyApiFallback: true,
        hot: true,
        inline: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: 'snackbar',
            template: 'public/index.ejs'
        }),

        new webpack.HotModuleReplacementPlugin()
    ],

    cache: true,
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500,
    },
};
