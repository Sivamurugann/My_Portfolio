import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left,#172554 0%,#030712 55%)",
      }}
    >
      <Navbar />

      <Home />

      <Footer />
    </Box>
  );
}

export default App;