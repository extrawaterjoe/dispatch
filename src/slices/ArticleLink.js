import React from "react"
import styled from "styled-components"
import "../styles/css-vars.css"

const LinkContainer = styled.div`
  margin: 10px;
`

const LinkButton = styled.a`
  border: 2px solid var(--text-color);
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
    <LinkContainer>
      <LinkButton href={slice.primary.url.url} target="_blank" rel="noopener">
        {slice.primary.link_text.text}
      </LinkButton>
    </LinkContainer>
  )
}

export default ArticleLink
