import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${colors.veryDarkBlue};
    color: ${colors.lightGrey};
    font-family: 'Outfit', sans-serif;

    h1, h2, h3 {
      font-weight: 700;
    }
  
    p {
      font-weight: 400;
    }

    button {
      border: 0;
      cursor: pointer;
    }
  }

`;
