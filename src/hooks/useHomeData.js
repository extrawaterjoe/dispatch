import { useStaticQuery, graphql } from "gatsby"

export const useHomeData = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismicHome {
        data {
          body {
            ... on PrismicHomeDataBodyBandcampLink {
              primary {
                url {
                  url
                }
              }
            }
            ... on PrismicHomeDataBodySiteColor {
              items {
                background
                text_primary
                text_secondary
              }
            }
          }
        }
      }
    }
  `)

  const bandcampURL = data.prismicHome.data.body[0].primary.url.url
  // const backgroundColor = data.prismicHome.data.body[0].items[0].background
  // const textPrimary = data.prismicHome.data.body[0].items[0].text_primary
  // const textSecondary = data.prismicHome.data.body[0].items[0].text_secondary

  return { bandcampURL }
}
