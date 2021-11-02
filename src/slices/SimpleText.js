import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

const StyledTextContainer = styled.div`
  @media only screen and (max-width: 650px) {
    margin: 0px 10px;
  }

  margin: 0px 10px;

  a:visited {
    color: pink;
  }
`

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
