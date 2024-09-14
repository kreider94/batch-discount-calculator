import React from "react";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ShopProvider } from "./ShopContext";
import BatchDiscountCalculator from "./BatchDiscountCalculator";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ShopProvider>
        <CssBaseline />
        <Container>
          <BatchDiscountCalculator />
        </Container>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default App;
