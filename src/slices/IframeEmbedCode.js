import React from "react"
import { graphql } from "gatsby"

const IframeEmbedCode = ({ slice }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.embed_code.text,
      }}
    />
  )
}

export default IframeEmbedCode

export const query = graphql`
  fragment ArticleDataBodyIframeEmbedCode on PrismicArticleDataBodyIframeEmbedCode {
    primary {
      embed_code {
        text
      }
    }
  }
`
