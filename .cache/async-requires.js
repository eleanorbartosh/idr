// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/scottstrubberg/idr/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-page-js": () => import("/Users/scottstrubberg/idr/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-pages-404-js": () => import("/Users/scottstrubberg/idr/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/scottstrubberg/idr/.cache/data.json")

