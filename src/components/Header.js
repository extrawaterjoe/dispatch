import React from "react"
import { useHomeData } from "../hooks/useHomeData"

const Header = ({ toggleTheme }) => {
  const { data } = useHomeData()
  console.log("header:", data)

  return (
    <div>
      <button onClick={toggleTheme}>THEME</button>
    </div>
  )
}

export default Header
