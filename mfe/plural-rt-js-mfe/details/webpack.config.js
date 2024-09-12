const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 4100,
    },
    plugins: [
        new FederationPlugin(
            {
                name: 'detail',
                filename: 'detail.js',
                exposes: {
                    './detailPage': './src/index'
                },
                shared: ['lodash']
            }
        ),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),

    ]

}