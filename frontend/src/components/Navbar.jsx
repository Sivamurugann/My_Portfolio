import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const navItems = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Projects",
    id: "projects",
  },
  {
    label: "Education",
    id: "education",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(3,7,18,.80)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,.08)"
            : "none",
          transition: ".35s",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              minHeight: "80px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: 800,
                letterSpacing: 1,
              }}
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

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "text.secondary",
                    px: 2,

                    "&:hover": {
                      color: "white",
                      background: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

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

              <Button
                variant="contained"
                component="a"
                href="/resume.pdf"
                download
                startIcon={<DescriptionIcon />}
                sx={{
                  ml: 2,
                  px: 3,
                }}
              >
                Resume
              </Button>
                          </Stack>

            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#0F172A",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Menu
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
              >
                <ListItemButton
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: 4,
            }}
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
              href="https://linkedin.com/in/sivamurugan-t2005/"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>

          <Button
            fullWidth
            variant="contained"
            startIcon={<DescriptionIcon />}
            component="a"
            href="/resume.pdf"
            download
            sx={{
              mt: 4,
              py: 1.5,
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
}