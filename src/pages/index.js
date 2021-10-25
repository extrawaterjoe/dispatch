import React from "react"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import styled from "styled-components"
import { useArticleData } from "../hooks/useArticleData"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"
import { linkResolver } from "../utils/linkResolver"

const StyledArticleIndex = styled.article`
  margin: 20px 0px;
`

const Home = () => {
  const { dataNodes } = useArticleData()
  if (!dataNodes) return

  return (
    <Layout>
      <Seo title="Home" />
      {dataNodes.map((node, index) => {
        return (
          <StyledArticleIndex>
            <SliceZone key={index} sliceZone={node.data.body} />
          </StyledArticleIndex>
        )
      })}
    </Layout>
  )
}

export default withPrismicPreview(Home, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
  },
])
