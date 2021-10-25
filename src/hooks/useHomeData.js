import { useStaticQuery, graphql } from "gatsby"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

export const useHomeData = () => {
  const staticHomeData = useStaticQuery(graphql`
    query HomeQuery {
      prismicHome {
        data {
          body {
            ... on PrismicHomeDataBodyCustomLink {
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
          home_description {
            text
          }
          home_image {
            fluid(maxWidth: 200) {
              src
            }
          }
          home_name {
            text
          }
        }
      }
    }
  `)

  const { data, isPreview } = useMergePrismicPreviewData(staticHomeData)

  return { data }
}
