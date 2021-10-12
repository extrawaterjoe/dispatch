import React from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Styledh1 = styled.h1`
  // color: blue;
`

export default function Home() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  if (!componentMounted) {
    return <div />
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Styledh1>Hello world!</Styledh1>
    </Layout>
  )
}
