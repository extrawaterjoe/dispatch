import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Styledh1 = styled.h1`
  color: purple;
`

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <Styledh1>Hello world!</Styledh1>
    </Layout>
  )
}
