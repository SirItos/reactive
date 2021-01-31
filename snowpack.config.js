// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  exclude: [
    '**/node_modules/**/*',
    '**/.prettierrc',
    '**/package-lock.json',
    '**/package.json',
    '**/escription.txt',
    '**/snowpack.config.js'
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
    minify: true,
    target: 'es2018'
  }
}
