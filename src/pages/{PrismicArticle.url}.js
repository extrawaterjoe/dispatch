import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const ArticleTemplate = ({ data }) => {
  if (!data) return console.log("no data...")
  const doc = data.prismicArticle.data
  console.log("doc", doc)

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <SliceZone sliceZone={doc.body} />
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleQuery($id: String) {
    prismicArticle(id: { eq: $id }) {
      data {
        body {
          ... on PrismicArticleDataBodyIframeEmbedCode {
            id
            slice_type
            primary {
              embed_code {
                text
              }
            }
          }
          ... on PrismicArticleDataBodyImage {
            id
            slice_type
            primary {
              image {
                alt
                url
              }
              optional_caption {
                text
              }
            }
          }
          ... on PrismicArticleDataBodySimpleText {
            id
            slice_type
            primary {
              text_body {
                text
              }
              text_heading {
                text
              }
            }
          }
        }
        document_display_name {
          text
        }
      }
    }
  }
`
