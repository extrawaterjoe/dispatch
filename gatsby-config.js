require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `dispatch`,
    description: `dispatch starter - a static bulletin board for links, images, text, and embeds`,
    author: `@extrawaterjo`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        schemas: {
          home: require("./custom_types/home.json"),
          article: require("./custom_types/article.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dispatch`,
        short_name: `dispatch`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
