import React from "react"
import styled from "styled-components"

const StyledHomeImage = styled.img`
  border-radius: 50%;
  height: 100px;
`

const StyledInfoContainer = styled.div`
  text-align: center;
`

const HomeImage = ({ slice }) => {
  return (
    <>
      <StyledHomeImage
        src={slice.primary.home_image.fluid.src}
        alt={slice.primary.home_name.text}
      />
      <StyledInfoContainer>
        <h3>{slice.primary.home_name.text}</h3>
      </StyledInfoContainer>
    </>
  )
}

export default HomeImage
