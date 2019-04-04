// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-js": () => import("/Users/scottstrubberg/idr/src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/scottstrubberg/idr/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/scottstrubberg/idr/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/scottstrubberg/idr/.cache/data.json")

