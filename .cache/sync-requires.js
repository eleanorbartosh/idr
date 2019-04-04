const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/scottstrubberg/idr/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/scottstrubberg/idr/src/templates/page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/scottstrubberg/idr/src/pages/404.js")))
}

