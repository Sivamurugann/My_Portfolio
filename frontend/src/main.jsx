import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#4F8CFF",
    },

    secondary: {
      main: "#8B5CF6",
    },

    background: {
      default: "#030712",
      paper: "#111827",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
  },

  typography: {
    fontFamily: `"Inter","Segoe UI","Roboto",sans-serif`,
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#111827",
          border: "1px solid rgba(255,255,255,.08)",
          backgroundImage: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);