var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: '[hash:6].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.json?$/,
                use: 'json-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    plugins: [
        new ExtractTextPlugin('[hash:6].main.css'),
        new HtmlWebpackPlugin({
            title: 'index',
            template: 'src/index.html',
            filename: 'index.html'
        }),
    ],
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        proxy: [
            {
                context: ['/books'],
                target: 'https://www.googleapis.com',
                changeOrigin: true
            }
        ]
    }
};