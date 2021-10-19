module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-prismic-previews/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"dispatch","promptForAccessToken":true,"apiEndpoint":"https://dispatch.cdn.prismic.io/api/v2","lang":"*","pageSize":100,"imageImgixParams":{"auto":"compress,format","fit":"max","q":50},"imagePlaceholderImgixParams":{"w":100,"blur":15},"toolbar":"new"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"dispatch","short_name":"dispatch","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"135d4ac73430bea1830302512ad1b48a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
