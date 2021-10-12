// SliceZone.js file

import * as React from "react"

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

  return <main className="container">{sliceZoneContent}</main>
}

export default SliceZone
