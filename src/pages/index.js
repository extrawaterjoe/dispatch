import React from "react"
import styled from "styled-components"
import { useArticleData } from "../hooks/useArticleData"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const StyledArticleIndex = styled.article`
  margin: 10px 0;
`

const Home = () => {
  const { dataNodes } = useArticleData()

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

export default Home
