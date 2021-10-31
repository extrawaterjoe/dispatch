import React from "react"
import styled from "styled-components"
import "../styles/css-vars.css"

const LinkButton = styled.a`
  border: 2px solid var(--text-color);
  margin: 10px 0px;
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: var(--text-color);
  display: inline-block;

  &:hover,
  &:active {
    background-color: var(--text-color);
    color: var(--background-color);
  }
`

const ArticleLink = ({ slice }) => {
  if (!slice) return

  return (
    <LinkButton href={slice.primary.url.url} target="_blank">
      {slice.primary.link_text.text}
    </LinkButton>
  )
}

export default ArticleLink
