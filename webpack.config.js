const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // entry : "./src/test.js", // webpack이 build할 파일 >> src/test.js 파일 기준으로 import 되어 있는 모든 파일을 찾아 하나의 파일로 합치게 됨
    entry : "./src/index.js", 
    output : { // output 정보를 통해 빌드 파일을 생성
        filename : "bundle.js",
        path: path.resolve(__dirname + "/build")
    },
    devServer: {
        contentBase: path.resolve("./build"),
        index: "index.html",
        port: 9003
    },
    mode : "none", // webpack 빌드 옵션
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader']
            },
            {
                test : /\.html$/,
                use: [
                    {
                        loader : "html-loader",
                        // options : { minimize : true } // 코드 최적화 옵션 >> 빼면 코드가 줄바꿈 된 형태로 보여짐
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // 해석 : 먼저 sass-loader로 scss 파일을 읽고 css로 변환한 후 css-loader로 css를 읽음. 그리고 MiniCssExtractPlugin으로 읽은 CSS를 파일로 추출
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        // 빌드 시 output에 있는 bundle.js를 자동으로 import함
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]

};