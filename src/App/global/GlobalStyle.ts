import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.fontPrimary};
    font-size: ${({ theme }) => theme.size.font};
  }

`;

export default GlobalStyle;
