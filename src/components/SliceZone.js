// SliceZone.js file

import React from "react"

import Image from "../slices/Image"
import BandcampPlayerEmbed from "../slices/BandcampPlayerEmbed"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    image: Image,
    bandcamp_player_embed: BandcampPlayerEmbed,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <React.Fragment>{sliceZoneContent}</React.Fragment>
}

export default SliceZone
