import * as React from "react"
import { useDarkMode } from "../hooks/useDarkMode"
import { GlobalStyles } from "../styles/Global"
import Header from "./Header"
import PropTypes from "prop-types"

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
      <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
