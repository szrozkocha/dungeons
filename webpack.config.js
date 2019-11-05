const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.glsl', '.png']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '')
    }
};