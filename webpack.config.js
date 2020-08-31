const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './src/pages/index.js',
    output: {
        path: path.join(__dirname, './dist'), 
        filename: 'app.js'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html'
        })
    ]
}