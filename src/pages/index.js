import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Styledh1 = styled.h1`
  color: blue;
`

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <Styledh1>Hello world!</Styledh1>
    </Layout>
  )
}
