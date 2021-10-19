import React from "react"
import styled from "styled-components"
import { useHomeData } from "../hooks/useHomeData"
import SliceZone from "./SliceZone"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = ({ toggleTheme }) => {
  const { data } = useHomeData()

  return (
    <StyledHeader>
      <SliceZone sliceZone={data.prismicHome.data.body} />
      <button onClick={toggleTheme}>THEME</button>
    </StyledHeader>
  )
}

export default Header
