import { useStaticQuery, graphql } from "gatsby"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

export const useArticleData = () => {
  const staticArticleData = useStaticQuery(graphql`
    query myQuery {
      allPrismicArticle(sort: { fields: first_publication_date, order: DESC }) {
        nodes {
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
                    fluid(maxWidth: 720) {
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
                    text
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
    }
  `)

  const { data, isPreview } = useMergePrismicPreviewData(staticArticleData)

  const dataNodes = data.allPrismicArticle.nodes

  return { dataNodes }
}
