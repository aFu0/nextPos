const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './styles')],
    prependData: `@import "@/styles/global.scss";`
  }
}

module.exports = nextConfig