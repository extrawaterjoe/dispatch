import { createGlobalStyle } from "styled-components"
import "./css-vars.css"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
    color: var(--text-primary);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    margin: 0 100px;
  }
`
