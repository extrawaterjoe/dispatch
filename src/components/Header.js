import React from "react"
import styled from "styled-components"
import { useHomeData } from "../hooks/useHomeData"
import HomeInfo from "./HomeInfo"
import SliceZone from "./SliceZone"
import SunIcon from "../icons/sun.svg"
import MoonIcon from "../icons/moon.svg"

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SwitchContainer = styled.div`
  width: 100%;
  padding: 0px 10px;
  text-align: right;
`

const ToggleButton = styled.button`
  background: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  display: inline-flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1.2;
  outline: none;
  height: 25px;
  min-width: 25px;
  font-size: 15px;
  padding: 0px;
  & > svg {
    height: 15px;
    width: 15px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

const CustomLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
`

const Header = ({ theme, toggleTheme }) => {
  const { data } = useHomeData()

  return (
    <StyledHeader>
      <SwitchContainer>
        <ToggleButton onClick={toggleTheme}>
          {theme === "light" ? (
            <MoonIcon style={{ fill: "midnightblue" }} />
          ) : (
            <SunIcon style={{ fill: "yellow" }} />
          )}
        </ToggleButton>
      </SwitchContainer>
      <HomeInfo props={data.prismicHome.data} />
      <CustomLinkContainer>
        <SliceZone sliceZone={data.prismicHome.data.body} />
      </CustomLinkContainer>
    </StyledHeader>
  )
}

export default Header
