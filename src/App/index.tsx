import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global/GlobalStyle";
import theme from "./global/theme";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
