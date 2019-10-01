const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ({
    entry: {
        main: [
            path.join(__dirname, 'src', 'index'),
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true,
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none',
    watch: process.env.NODE_ENV === 'development',
    watchOptions: {
        poll: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        //hot: true,
        port: 9000,
    },
});
