import * as React from "react"
import { GlobalStyles } from "../styles/global"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
