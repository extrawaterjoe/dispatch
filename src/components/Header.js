import React from "react"
import { useHomeData } from "../hooks/useHomeData"

const Header = ({ toggleTheme }) => {
  const { bandcampURL } = useHomeData()

  return (
    <div>
      <h3>{bandcampURL}</h3>
      <button onClick={toggleTheme}>THEME</button>
    </div>
  )
}

export default Header
