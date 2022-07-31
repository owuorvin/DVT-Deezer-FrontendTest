import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Songs from "./components/Songs";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Songs />
    </ThemeProvider>
  );
}

export default App;
