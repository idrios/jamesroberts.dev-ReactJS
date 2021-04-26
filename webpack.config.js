const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'), 
        filename: 'app.js',
        publicPath: '/' 
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
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/, 
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    }, 
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}