import * as React from "react"
import { GlobalStyles } from "../styles/Global"
import Header from "./Header"
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
