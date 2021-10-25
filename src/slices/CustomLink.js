import React from "react"
import styled from "styled-components"
import "../styles/css-vars.css"

const CustomLinkButton = styled.a`
  font-family: var(--secondary-font);
  color: var(--text-color);
  text-decoration: none;
  font-size: 12px;
  background-color: var(--custom-link-bg);
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 10px;

  transition: all 250ms ease 0s;

  &:hover {
    background-color: var(--custom-link-hover);
  }
`

const CustomLink = ({ slice }) => {
  if (!slice) return

  return (
    <CustomLinkButton href={slice.primary.url.url} target="_blank">
      {slice.primary.link_text.text}
    </CustomLinkButton>
  )
}

export default CustomLink
