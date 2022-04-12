import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";

const App = () => {
  return (
    <Container maxWidth="1920px" disableGutters>
      <CssBaseline />
      <Header />
    </Container>
  );
};

export default App;
