import React from "react"
import { graphql } from "gatsby"

const SimpleText = ({ slice }) => {
  console.log(slice)
  return (
    <>
      <div>{slice.primary.text_heading.text}</div>
      <div>{slice.primary.text_body.text}</div>
    </>
  )
}

export default SimpleText

export const query = graphql`
  fragment ArticleDataBodySimpleText on PrismicArticleDataBodySimpleText {
    primary {
      text_body {
        text
      }
      text_heading {
        text
      }
    }
  }
`
