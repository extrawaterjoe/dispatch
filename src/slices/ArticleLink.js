import React from "react"

const ArticleLink = ({ slice }) => {
  console.log("Link:", slice)
  return (
    <>
      <div>{slice.primary.link_text.text}</div>
      <div>{slice.primary.url.url}</div>
    </>
  )
}

export default ArticleLink
