import React from "react"
import Image from "../slices/Image"
import IframeEmbedCode from "../slices/IframeEmbedCode"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    image: Image,
    iframe_embed_code: IframeEmbedCode,
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
