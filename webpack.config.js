const path = require("path")

module.exports = {
    module: {
        rules: [
          {
            test: /\.[jt]sx?$/i,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
        ]
    }
}