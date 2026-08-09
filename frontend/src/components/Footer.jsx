import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        borderTop: "1px solid rgba(255,255,255,.08)",
        background: "rgba(255,255,255,.02)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 6,
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left */}

          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
            >
              Sivamurugan
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                }}
              >
                .
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "text.secondary",
              }}
            >
              MERN Stack Developer • Java Developer
            </Typography>
          </Box>

          {/* Center */}

          <Stack
            direction="row"
            spacing={1}
          >
            <IconButton
              component="a"
              href="https://github.com/SivamuruganT"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/sivamurugan-t2005/"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component="a"
              href="mailto:sivamurugann.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <EmailIcon />
            </IconButton>

            <IconButton
              color="primary"
              onClick={scrollTop}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider />

        <Typography
          align="center"
          sx={{
            py: 3,
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Sivamurugan T.
        </Typography>

        <Typography
          align="center"
          sx={{
            pb: 4,
            color: "text.secondary",
            fontSize: ".9rem",
          }}
        >
          Designed & Developed using React, Material UI,
          Node.js, Express and MongoDB
        </Typography>
      </Container>
    </Box>
  );
}