import React from "react"
import { useHomeData } from "../hooks/useHomeData"
import SliceZone from "./SliceZone"

const Header = ({ toggleTheme }) => {
  const { data } = useHomeData()

  return (
    <div>
      <SliceZone sliceZone={data.prismicHome.data.body} />
      <button onClick={toggleTheme}>THEME</button>
    </div>
  )
}

export default Header
