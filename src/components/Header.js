import React from "react"
import { useHomeData } from "../hooks/useHomeData"

const Header = ({ toggleTheme }) => {
  const { bandcampURL } = useHomeData()

  return (
    <>
      <h3>{bandcampURL}</h3>
      <button onClick={toggleTheme}>THEME</button>
    </>
  )
}

export default Header
