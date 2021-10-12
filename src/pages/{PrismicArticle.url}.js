import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import SliceZone from "../components/SliceZone"

const ArticleTemplate = ({ data }) => {
  if (!data) return console.log("no data...")
  const doc = data.prismicArticle.data

  return (
    <Layout>
      {/* <Seo title={doc.document_display_name.text} /> */}
      <SliceZone sliceZone={doc.body} />
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleQuery($id: String) {
    prismicArticle(id: { eq: $id }) {
      data {
        document_display_name {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ... on PrismicArticleDataBodyImage {
            id
            slice_type
            primary {
              image {
                alt
                url
              }
            }
          }
          ... on PrismicArticleDataBodySimpleText {
            id
            slice_type
          }
          ... on PrismicArticleDataBodySoundcloudPlayerEmbed {
            id
            slice_type
          }
          ... on PrismicArticleDataBodyYoutubeVideoEmbed {
            id
            slice_type
          }
          ... on PrismicArticleDataBodyBandcampPlayerEmbed {
            id
            slice_type
            primary {
              bandcamp_iframe_code {
                text
              }
            }
          }
        }
      }
    }
  }
`
