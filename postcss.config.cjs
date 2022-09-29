module.exports = {
  plugins: {
    'postcss-normalize-charset': {}, // CSSファイルの先頭にcharset追加
    autoprefixer: {},
    'postcss-sort-media-queries': {}, // メディアクエリをソート
    'css-declaration-sorter':{order:'smacss'}, // CSSプロパティの順番をソート
  },
}