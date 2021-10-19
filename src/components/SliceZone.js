import React from "react"
import HomeInfo from "../slices/HomeInfo"
import CustomLink from "../slices/CustomLink"
import Image from "../slices/Image"
import IframeEmbedCode from "../slices/IframeEmbedCode"
import SimpleText from "../slices/SimpleText"
import ArticleLink from "../slices/ArticleLink"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    home_info: HomeInfo,
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
