import * as React from "react"
import { useHomeData } from "../hooks/useHomeData"

export default function Header() {
  const { bandcampURL } = useHomeData()

  return <h3>{bandcampURL}</h3>
}
