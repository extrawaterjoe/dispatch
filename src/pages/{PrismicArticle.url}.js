import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { linkResolver } from "../utils/linkResolver"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const StyledArticle = styled.article`
  position: relative;
`

const ArticleTemplate = ({ data }) => {
  if (!data) return
  const doc = data.prismicArticle.data

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <StyledArticle>
        <SliceZone sliceZone={doc.body} />
      </StyledArticle>
    </Layout>
  )
}

export default withPrismicPreview(ArticleTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])

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
                fluid(
                  maxWidth: 720
                  placeholderImgixParams: { blur: 10 }
                  imgixParams: { auto: "['format', 'compress']", ar: "1.61" }
                ) {
                  src
                }
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
                html
              }
            }
          }
          ... on PrismicArticleDataBodyLink {
            id
            slice_type
            primary {
              url {
                url
              }
              link_text {
                text
              }
            }
          }
        }
        document_display_name {
          text
        }
      }
      _previewable
    }
  }
`
