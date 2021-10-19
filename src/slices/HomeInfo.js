import React from "react"

const HomeInfo = ({ slice }) => {
  return (
    <div>
      <img
        src={slice.primary.home_image.url}
        alt={slice.primary.home_name.text}
        height={"200px"}
      />
      <h1>{slice.primary.home_name.text}</h1>
    </div>
  )
}

export default HomeInfo
