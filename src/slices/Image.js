import React from "react"
import { graphql } from "gatsby"

const Image = ({ slice }) => {
  return (
    <section>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </section>
  )
}

export default Image

export const query = graphql`
  fragment ArticleDataBodyImage on PrismicArticleDataBodyImage {
    primary {
      image {
        alt
        url
      }
    }
  }
`
