import { useStaticQuery, graphql } from "gatsby"

export const useHomeData = () => {
  const data = useStaticQuery(graphql`
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

  return { data }
}
