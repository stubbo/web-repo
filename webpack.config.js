const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = { 
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            tempalte: "./src/index.html",
            filename: "./index.html"
        })
    ]
}