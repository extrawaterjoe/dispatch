import React from "react"
import { useArticleData } from "../hooks/useArticleData"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const Home = () => {
  const { dataNodes } = useArticleData()

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
