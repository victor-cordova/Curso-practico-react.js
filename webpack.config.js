const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Images: path.resolve(__dirname, "src", "static", "images"),
    }
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
        "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset', //
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
			{
				test: /\.(woff|woff2)$/, //Si se necesita importar otros archivos solo se coloca aqui.
				type: "asset",
				generator: {
					filename: 'assets/fonts/[hash][ext][query]' //Se indica en que carpeta serán
					//enviados los fonts
				}
			},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body", //Sirve para indicar en que lugar se colocará el archivo .js
  //en el body o en el head.
      template: "./public/index.html", //Se le indica que archivo de html va a empaquetar
      filename: "./index.html", //Se indica como se llamará el archivo que luego del empa
  //quetamiento.
    }),
    new MiniCssExtractPlugin({
      filename: "./static/[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
};
