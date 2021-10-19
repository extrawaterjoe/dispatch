import { useStaticQuery, graphql } from "gatsby"
import { useMergePrismicPreviewData } from "gatsby-plugin-prismic-previews"

export const useHomeData = () => {
  const staticHomeData = useStaticQuery(graphql`
    query HomeQuery {
      prismicHome {
        data {
          body {
            ... on PrismicHomeDataBodyHomeInfo {
              id
              primary {
                home_image {
                  alt
                  url
                }
                home_name {
                  text
                }
              }
              slice_type
            }
            ... on PrismicHomeDataBodyCustomLink {
              id
              slice_type
              primary {
                url {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  const { data, isPreview } = useMergePrismicPreviewData(staticHomeData)

  return { data }
}
