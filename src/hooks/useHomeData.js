import { useStaticQuery, graphql } from "gatsby"

export const useHomeData = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      prismicHome {
        data {
          body {
            ... on PrismicHomeDataBodyBandcampLink {
              primary {
                url {
                  url
                }
              }
              slice_type
            }
            ... on PrismicHomeDataBodyTwitterLink {
              id
              primary {
                url {
                  url
                }
              }
              slice_type
            }
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
          }
        }
      }
    }
  `)

  console.log(data)

  const bandcampURL = data.prismicHome.data.body[0].primary.url.url

  return { bandcampURL }
}
