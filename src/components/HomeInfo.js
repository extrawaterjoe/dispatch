import React from "react"
import styled from "styled-components"

const StyledHomeImage = styled.img`
  border-radius: 50%;
  height: 100px;
`

const StyledInfoContainer = styled.div`
  text-align: center;
  margin: 0px 10px;
`

const HomeImage = ({ props }) => {
  return (
    <>
      <StyledHomeImage
        src={props.home_image.fluid.src}
        alt={props.home_name.text}
      />
      <StyledInfoContainer>
        <h3>{props.home_name.text}</h3>
        <p>{props.home_description.text}</p>
      </StyledInfoContainer>
    </>
  )
}

export default HomeImage
