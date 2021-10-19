import React from "react"
// import { graphql } from "gatsby"

const Image = ({ slice }) => {
  return (
    <img
      src={slice.primary.image.fluid.src}
      alt={slice.primary.image.alt}
      width={"100%"}
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
