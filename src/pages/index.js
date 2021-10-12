import React from "react"
import { useArticleData } from "../hooks/useArticleData"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SliceZone from "../components/SliceZone"

const Styledh1 = styled.h1`
  // color: blue;
`

export default function Home() {
  const { dataArray } = useArticleData()

  return (
    <Layout>
      <Seo title="Home" />
      {dataArray.map(node => {
        return <SliceZone sliceZone={node.data.body} />
      })}
    </Layout>
  )
}
