import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import {font} from "./Common";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primaryBg};
    line-height: 1.2;
    min-width: 360px;
    
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    background-color: white;
    padding: 100px 0;

    @media ${theme.media.tablet} {
      padding-bottom: 150px;
    }

    @media ${theme.media.mobile} {
      padding-bottom: 60px;
    }
  }

  // h1{
  //   // ${font({weight: 700, Fmax: 58, Fmin: 20,})}
  //   //font-size: calc( (100vw - 480px)/(1580 - 360) * (58 - 36) + 16px);
  // }
  // h2{
  //   //font-size: calc( (100vw - 480px)/(1580 - 360) * (48 - 26) + 16px);
  //   ${font({family: "'Poppins','sans-serif'", weight: 700, Fmax: 48, Fmin: 26,})}
  // }

`