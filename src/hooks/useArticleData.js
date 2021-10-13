import { useStaticQuery, graphql } from "gatsby"

export const useArticleData = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      allPrismicArticle {
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
    }
  `)

  const dataNodes = data.allPrismicArticle.nodes

  return { dataNodes }
}
