import * as React from "react"
import styled from "styled-components"
import { useHomeData } from "../hooks/useHomeData"

export default function Header() {
  const { bandcampURL, textPrimary } = useHomeData()

  const Styledh3 = styled.h3`
    color: ${textPrimary};
  `
  return <Styledh3>{bandcampURL}</Styledh3>
}
