import { useStaticQuery, graphql } from "gatsby"

export const useArticleData = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicArticle {
        nodes {
          data {
            body {
              ... on PrismicArticleDataBodyBandcampPlayerEmbed {
                id
                primary {
                  bandcamp_iframe_code {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicArticleDataBodySimpleText {
                id
                primary {
                  text_body {
                    text
                  }
                  text_heading {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicArticleDataBodyImage {
                slice_type
                id
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
            }
            document_display_name {
              text
            }
          }
          uid
        }
      }
    }
  `)

  const dataNodes = data.allPrismicArticle.nodes

  return { dataNodes }
}
