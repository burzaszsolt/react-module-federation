const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
  },
  mode: "development",
  resolve: {
    alias: {
      src: path.resolve('.', 'src')
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3001,
    historyApiFallback: true
  },
  output: {
    publicPath: "http://localhost:3001/",
    chunkFilename: "[id].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfProducts",
      library: { type: "var", name: "mfProducts" },
      filename: "remoteEntry.js",
      exposes: {
        "./ProductService": "./src/ProductService",
      },
      remotes: {
        hostApp: "hostApp"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
