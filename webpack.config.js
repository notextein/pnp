const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'server/client'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: 10000,
        proxy: {
            '/security': {
                target: 'http://localhost:10001'
            },
            '/api': {
                target: 'http://localhost:10001'
            }
        },
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/'
                    }
                },
                'css-loader']
            },
            {
                test: /\.(otf?)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'resources/fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2?)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'resources/webfonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'resources/images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: "resources/[name].css",
            chunkFilename: "resources/[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        }),
        // new WorkboxPlugin.GenerateSW({
        //     swDest: 'sw.js',
        //     include: [/\.html$/, /\.js$/],
        //     runtimeCaching: [
        //         // {
        //         //     urlPattern: new RegExp('/security'),
        //         //     handler: 'NetworkFirst'
        //         // },
        //         {
        //             urlPattern: /\.css$/,
        //             handler: 'StaleWhileRevalidate',
        //             options: {
        //                 cacheName: 'css-cache'
        //             }
        //         },
        //         {
        //             urlPattern: /\.(ttf|eot|svg|woff2?)$/,
        //             handler: 'StaleWhileRevalidate',
        //             options: {
        //                 cacheName: 'fonts-cache'
        //             }
        //         },
        //         {
        //             urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        //             handler: 'CacheFirst',
        //             options: {
        //                 cacheName: 'image-cache',
        //                 expiration: {
        //                     maxEntries: 20,
        //                     maxAgeSeconds: 7 * 24 * 60 * 60
        //                 }
        //             }
        //         }
        //     ]
        // })
    ]
};