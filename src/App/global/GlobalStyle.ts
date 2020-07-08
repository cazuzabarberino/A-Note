import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  body{
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.fontPrimary};
    font-size: ${({ theme }) => theme.size.font};
    font-family: 'Yellowtail', cursive;
    font-family: 'Roboto', sans-serif;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

`;

export default GlobalStyle;
