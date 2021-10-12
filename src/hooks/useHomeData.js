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
            }
          }
        }
      }
    }
  `)

  const bandcampURL = data.prismicHome.data.body[0].primary.url.url

  return { bandcampURL }
}
