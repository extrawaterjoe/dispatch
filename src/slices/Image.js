import React from "react"
import styled from "styled-components"
import "../styles/css-vars.css"
// import { graphql } from "gatsby"

const FigureContainer = styled.figure`
  margin: 0px 10px;
`

const OptionalCaption = styled.figcaption`
  font-family: var(--secondary-font);
  font-size: var(--image-caption-font-size);
`

const Image = ({ slice }) => {
  if (!slice) return

  return (
    <FigureContainer>
      <img
        width={"100%"}
        src={slice.primary.image.fluid.src}
        alt={slice.primary.image.alt}
      />
      {slice.primary.optional_caption ? (
        <OptionalCaption>{slice.primary.optional_caption.text}</OptionalCaption>
      ) : (
        <></>
      )}
    </FigureContainer>
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
