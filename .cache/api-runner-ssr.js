var plugins = [{
      plugin: require('/Users/scottstrubberg/idr/node_modules/gatsby-mdx/gatsby-ssr'),
      options: {"plugins":[],"root":"/Users/scottstrubberg/idr","defaultLayouts":{"default":"/Users/scottstrubberg/idr/src/components/Layouts/index.js"},"globalScope":"\n        import { AnchorLinks } from '@carbon/addons-website';\n        import { ImageComponent } from '@carbon/addons-website';\n        import ClickableTile from '/Users/scottstrubberg/idr/src/components/ClickableTile';\n        import ColorBlock from '/Users/scottstrubberg/idr/src/components/ColorBlock';\n        import ComponentCode from '/Users/scottstrubberg/idr/src/components/ComponentCode';\n        import ComponentDocs from '/Users/scottstrubberg/idr/src/components/ComponentDocs';\n        import ComponentReact from '/Users/scottstrubberg/idr/src/components/ComponentReact';\n        import DoDontExample from '/Users/scottstrubberg/idr/src/components/DoDontExample';\n        import WebsiteTabs from '/Users/scottstrubberg/idr/src/components/WebsiteTabs'; \n        import FeatureTile from '/Users/scottstrubberg/idr/src/components/FeatureTile';\n        import GridWrapper from '/Users/scottstrubberg/idr/src/components/GridWrapper';\n        import SimpleColumns from '/Users/scottstrubberg/idr/src/components/SimpleColumns';\n        import Video from '/Users/scottstrubberg/idr/src/components/Video';\n        \n        export default {\n          AnchorLinks,\n          ImageComponent,\n          ClickableTile,\n          ColorBlock,\n          ComponentCode,\n          ComponentDocs,\n          ComponentReact,\n          DoDontExample,\n          WebsiteTabs,\n          FeatureTile,\n          GridWrapper,\n          SimpleColumns,\n          Video,\n        };\n      ","gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-unwrap-images"},{"resolve":"gatsby-remark-images","options":{"maxWidth":1120,"linkImagesToOriginal":false,"backgroundColor":"transparent"}},{"resolve":"gatsby-remark-embed-video","options":{"width":1024,"ratio":1.77,"related":false,"noIframeBorder":true}},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-plugin-catch-links"}]},
    },{
      plugin: require('/Users/scottstrubberg/idr/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-131128838-1"},
    },{
      plugin: require('/Users/scottstrubberg/idr/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"IBM Design Research","short_name":"idr","start_url":"/","background_color":"#000000","theme_color":"#cccccc","display":"minimal-ui","icon":"src/content/global/images/favicon-32.png"},
    },{
      plugin: require('/Users/scottstrubberg/idr/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/scottstrubberg/idr/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
