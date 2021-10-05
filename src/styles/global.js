import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin: 0 100px;
  }
`
