import { useStaticQuery, graphql } from "gatsby"

export const useArticleData = () => {
  const data = useStaticQuery(graphql`
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

  const dataNodes = data.allPrismicArticle.nodes

  return { dataNodes }
}
