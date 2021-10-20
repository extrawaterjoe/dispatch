import React from "react"
import Image from "../slices/Image"
import IframeEmbedCode from "../slices/IframeEmbedCode"
import SimpleText from "../slices/SimpleText"
import ArticleLink from "../slices/ArticleLink"
import CustomLink from "../slices/CustomLink"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    custom_link: CustomLink,
    image: Image,
    iframe_embed_code: IframeEmbedCode,
    simple_text: SimpleText,
    link: ArticleLink,
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
