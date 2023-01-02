import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    min-width: 100vw;
    min-height: 100vh;
  }

  #__next {
    height: 100%;
  }

  
  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      )
      rgb(var(--background-start-rgb));
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  `;
