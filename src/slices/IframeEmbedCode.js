import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

const StylediFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`

const IframeEmbedCode = ({ slice }) => {
  return (
    <StylediFrameContainer
      dangerouslySetInnerHTML={{
        __html: slice.primary.embed_code.text,
      }}
    />
  )
}

export default IframeEmbedCode

// simplify query in useArticleData to use fragments in slice components

// export const query = graphql`
//   fragment ArticleDataBodyIframeEmbedCode on PrismicArticleDataBodyIframeEmbedCode {
//     primary {
//       embed_code {
//         text
//       }
//     }
//   }
// `
