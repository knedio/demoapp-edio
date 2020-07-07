module.exports = {
  // theme: {
  //   extend: {
  //     colors: {
  //       'primary': '#2d2c3c',
  //     },
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
          ]
        }
      }
    ]
  }
}