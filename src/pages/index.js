import React from "react"
import { useArticleData } from "../hooks/useArticleData"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const Styledh1 = styled.h1`
  // color: blue;
`

const Home = () => {
  const { dataNodes } = useArticleData()

  console.log(dataNodes)

  return (
    <Layout>
      <Seo title="Home" />
      {dataNodes.map((node, index) => {
        return <SliceZone key={index} sliceZone={node.data.body} />
      })}
    </Layout>
  )
}

export default Home
