import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

const StyledImage = styled.img`
  margin: 10px 0px;
  width: 100%;
`

const Image = ({ slice }) => {
  if (!slice) return

  return (
    <StyledImage
      src={slice.primary.image.fluid.src}
      alt={slice.primary.image.alt}
    />
  )
}

export default Image

// simplify query in useArticleData to use fragments in slice components

// export const query = graphql`
//   fragment ArticleDataBodyImage on PrismicArticleDataBodyImage {
//     primary {
//       image {
//         alt
//         url
//       }
//     }
//   }
// `
