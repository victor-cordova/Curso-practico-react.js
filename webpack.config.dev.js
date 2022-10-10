const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    clean: true,
		publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      Icons: path.resolve("src", "assets", "icons"),
			Logos: path.resolve("src", "assets", "logos"),
			Styles: path.resolve("src", "styles"),

			Pure: path.resolve("src", "components", "pure"),
			Forms: path.resolve("src", "components", "pure", "forms"),
			Container: path.resolve("src", "components", "container"),
			Pages: path.resolve("src", "pages"),
			Hooks: path.resolve("src", "hooks"),

			Models: path.resolve("src", "models"),
			Utils: path.resolve("src", "utils"),
    }
  },
  mode: "development",
	devtool: "source-map",
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
        type: 'asset/resource',
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
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    compress: true,
    port: 9000,
		historyApiFallback: true,
  },
};
