import React from "react"
import styled from "styled-components"
import "../styles/css-vars.css"
import { useDarkMode } from "../hooks/useDarkMode"
import { GlobalStyles } from "../styles/Global"
import Header from "./Header"
import PropTypes from "prop-types"

const SiteContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 0px;
  max-width: var(--container-width);
`

const MainContainer = styled.main`
  margin: 10px;
  padding-bottom: 80px;
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
      <SiteContainer>
        <Header toggleTheme={toggleTheme} />
        <MainContainer>{children}</MainContainer>
      </SiteContainer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
