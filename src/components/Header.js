import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Header() {
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
          }
        }
      }
    }
  `)

  const bandcampURL = data.prismicHome.data.body[0].primary.url.url

  return <pre>{bandcampURL}</pre>
}
