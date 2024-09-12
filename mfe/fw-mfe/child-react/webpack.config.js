const HtmlWebpackPlugin = require("html-webpack-plugin");
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': ['@babel/preset-env','@babel/preset-react'],
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),

        new FederationPlugin({
            name: 'childReact',
            filename: 'remoteEntry.js',
            exposes: {
                './reactApp': './src/bootstrap'
            },
            shared: ["react", "react-dom"]
        })
    ]
}