// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-preview-js": () => import("./../../../src/pages/preview.js" /* webpackChunkName: "component---src-pages-preview-js" */),
  "component---src-pages-prismic-article-url-js": () => import("./../../../src/pages/{PrismicArticle.url}.js" /* webpackChunkName: "component---src-pages-prismic-article-url-js" */)
}

