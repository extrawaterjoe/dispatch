import React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby"

const StylediFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  margin: 0px 10px;
`

const IframeEmbedCode = ({ slice }) => {
  const containerRef = React.useRef()

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.firstElementChild.setAttribute(
        "title",
        "iframe player"
      )
    }
  })

  if (!slice) return

  return (
    <StylediFrameContainer
      ref={containerRef}
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
