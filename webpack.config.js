module.exports = {
 // entryにメインの処理が書かれたファイルのパスを指定する  
 entry: "./src/js/app.js",
 // outputにバンドルされたファイルの出力先のパスをしていします
  output: {
    filename: "./js/bundle.js"
  }
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', {'modules': false}]
              ]
            }
          }
        ]
      }
    ]
  }
}
