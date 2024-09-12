const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    //entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 4000,
    },

    plugins: [
        new FederationPlugin(
            {
                name: 'list',
                filename: 'container',
                remotes: {
                    list: 'list@http://localhost:4200/list.js',
                    detail: 'detail@http://localhost:4100/detail.js'
                }
            }
        ),
        new HtmlWebpackPlugin(
        {
            template: "./public/index.html" 
        }
    )],
}