import React from "react"
import styled from "styled-components"
import { useDarkMode } from "../hooks/useDarkMode"
import { GlobalStyles } from "../styles/Global"
import Header from "./Header"
import PropTypes from "prop-types"

const MainContainer = styled.main`
  max-width: 720px;
`

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  if (!componentMounted) {
    return <div />
  }

  return (
    <React.Fragment>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <MainContainer>{children}</MainContainer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
