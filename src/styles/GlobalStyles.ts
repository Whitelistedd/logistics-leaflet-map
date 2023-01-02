import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  #map {
    height: 180px;
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
  
  #mapId {
    height: 100vh;
    width: 100vw;
  }

  .leaflet-routing-container {
    background-color: white;
    padding: 10px;
  }
  
  `;
