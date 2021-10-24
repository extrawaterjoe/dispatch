import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

const StyledTextContainer = styled.div``

const SimpleText = ({ slice }) => {
  return (
    <StyledTextContainer
      dangerouslySetInnerHTML={{
        __html: slice.primary.text_body.html,
      }}
    />
  )
}

export default SimpleText

// simplify query in useArticleData to use fragments in slice components

// export const query = graphql`
//   fragment ArticleDataBodySimpleText on PrismicArticleDataBodySimpleText {
//     primary {
//       text_body {
//         text
//       }
//       text_heading {
//         text
//       }
//     }
//   }
// `
