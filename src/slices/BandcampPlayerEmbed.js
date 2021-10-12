import React from "react"
import { graphql } from "gatsby"

const BandcampPlayerEmbed = ({ slice }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.bandcamp_iframe_code.text,
      }}
    />
  )
}

export default BandcampPlayerEmbed

export const query = graphql`
  fragment ArticleDataBodyBandcampPlayerEmbed on PrismicArticleDataBodyBandcampPlayerEmbed {
    primary {
      bandcamp_iframe_code {
        text
      }
    }
  }
`
