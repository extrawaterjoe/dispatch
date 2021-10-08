import * as React from "react"
import Header from "./Header"
import { GlobalStyles } from "../styles/Global"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
