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
              ... on PrismicArticleDataBodyImage {
                id
                primary {
                  image {
                    url
                    alt
                  }
                  optional_caption {
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
            }
            document_display_name {
              text
            }
          }
        }
      }
    }
  `)

  const dataArray = data.allPrismicArticle.nodes

  return { dataArray }
}
