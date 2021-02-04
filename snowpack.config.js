// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const httpProxy = require('http-proxy')
const proxy = httpProxy.createServer({
  target: 'http://php'
})

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  routes: [
    {
      src: '/api',
      dest: (req, res) => proxy.web(req, res)
    }
  ],
  exclude: [
    '**/node_modules/**/*',
    '**/.prettierrc',
    '**/package-lock.json',
    '**/package.json',
    '**/escription.txt',
    '**/snowpack.config.js',
    '**/js/t.js',
    '**/php/**/*'
  ],
  plugins: ['@snowpack/plugin-sass'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  optimize: {
    bundle: true,
    treeshake: true,
    minify: true,
    target: 'es2018'
  }
}
