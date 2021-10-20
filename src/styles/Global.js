import { createGlobalStyle } from "styled-components"
import "./css-vars.css"

export const GlobalStyles = createGlobalStyle`

  // Roboto 400,700 & Space Mono 400
  // font-family: 'Roboto', sans-serif;
  // font-family: 'Space Mono', monospace;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Space+Mono&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--primary-font);
  }

  p {
    font-size: var(--primary-text-size);
  }
`
