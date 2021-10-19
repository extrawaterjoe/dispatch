import React from "react"
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews"
import { linkResolver } from "../utils/LinkResolver"
import Home from "./index"
import ArticleTemplate from "./{PrismicArticle.url}"

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      home: Home,
      article: ArticleTemplate,
    }),
  },
])
