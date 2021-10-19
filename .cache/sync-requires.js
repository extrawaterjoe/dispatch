
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/flatironschool/Gatsby-Development/dispatch/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/flatironschool/Gatsby-Development/dispatch/src/pages/index.js")),
  "component---src-pages-preview-js": preferDefault(require("/Users/flatironschool/Gatsby-Development/dispatch/src/pages/preview.js")),
  "component---src-pages-prismic-article-url-js": preferDefault(require("/Users/flatironschool/Gatsby-Development/dispatch/src/pages/{PrismicArticle.url}.js"))
}

