import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";

import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Container maxWidth="lg">

      {/* ================= HERO ================= */}

      <Box
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          gap: 8,
          py: 8,
        }}
      >
        {/* LEFT */}

        <Box
          sx={{
            flex: 1,
          }}
        >
          <Chip
            label="OPEN TO WORK"
            color="primary"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 22,
            }}
          >
            Hello, I'm
          </Typography>

          <Typography
            variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: {
                xs: "2.8rem",
                sm: "3.8rem",
                md: "4.6rem",
                lg: "5rem",
                },
                mt: 1,
                lineHeight: 1.1,
                whiteSpace: "nowrap",
                letterSpacing: "-2px",
              }}
          >
          Sivamurugan T
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: {
                xs: "1.5rem",
                md: "2rem",
              },
              background:
                "linear-gradient(90deg,#4F8CFF,#8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Full Stack Developer
          </Typography>

          <Typography
            sx={{
              mt: 4,
              color: "text.secondary",
              lineHeight: 2,
              maxWidth: 650,
              fontSize: "1.05rem",
            }}
          >
            Computer Science Engineering graduate passionate
            about building modern, scalable web applications.

            <br />
            <br />

            Experienced in React, Node.js, Express,
            MongoDB, Java, Python and SQL with
            strong problem solving skills.
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            sx={{
              mt: 5,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              component="a"
              href="/resume.pdf"
              download
            >
              Download Resume
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<EmailIcon />}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Contact Me
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 5,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip label="React" />
            <Chip label="Node.js" />
            <Chip label="Express" />
            <Chip label="MongoDB" />
            <Chip label="Java" />
            <Chip label="Python" />
            <Chip label="SQL" />
          </Stack>
        </Box>

        {/* RIGHT */}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            src="/DP_ORG.png"
            sx={{
              width: 320,
              height: 320,
              bgcolor: "#111827",
              border: "5px solid",
              borderColor: "primary.main",
              boxShadow:
                "0 0 70px rgba(79,140,255,.35)",
            }}
          >
            <CodeIcon
              sx={{
                fontSize: 120,
              }}
            />
          </Avatar>
        </Box>
      </Box>

      {/* ================= ABOUT ================= */}

      <Box
        sx={{
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
        >
          About Me
        </Typography>

        <Divider
          sx={{
            mb: 5,
          }}
        />

        <Typography
          sx={{
            color: "text.secondary",
            lineHeight: 2,
            fontSize: "1.05rem",
          }}
        >
          I'm passionate about building responsive,
          scalable and user-friendly web applications.

          I enjoy solving real-world problems using
          clean architecture and modern technologies.

          My current interests include Full Stack
          Development, Backend Engineering,
          REST APIs, Data Engineering and Cloud.
        </Typography>
      </Box>

            <Box
        id="skills"
        sx={{
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
        >
          Technical Skills
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4,1fr)",
            },
            gap: 4,
          }}
        >
          {[
            {
              title: "Frontend",
              skills: [
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Material UI",
              ],
            },
            {
              title: "Backend",
              skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "MongoDB",
              ],
            },
            {
              title: "Programming",
              skills: [
                "Java",
                "Python",
                "SQL",
                "DSA",
              ],
            },
            {
              title: "Tools",
              skills: [
                "Git",
                "Power BI",
                "VS Code",
                "Postman",
              ],
            },
          ].map((section) => (
            <Box key={section.title}>
              <Box
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,.08)",
                  height: "100%",
                  transition: ".3s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 40px rgba(79,140,255,.18)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="primary"
                  gutterBottom
                >
                  {section.title}
                </Typography>

                <Stack
                  spacing={1.5}
                  sx={{
                    mt: 3,
                  }}
                >
                  {section.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        justifyContent: "flex-start",
                        bgcolor: "#1E293B",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ================= PROJECTS ================= */}

      <Box
        id="projects"
        sx={{
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
        >
          Featured Projects
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Stack spacing={5}>

          {/* PROJECT 1 */}

          <Box
  sx={{
    bgcolor: "background.paper",
    borderRadius: 5,
    p: 5,
    border: "1px solid rgba(255,255,255,.08)",
    transition: ".3s",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow:
        "0 20px 40px rgba(79,140,255,.18)",
    },
  }}
>
  <Typography
    variant="h4"
    fontWeight={700}
  >
    Retail Billing & Customer Management System
  </Typography>

          <Box
              component="ul"
              sx={{
                mt: 3,
                mb: 0,
                pl: 3,
                color: "text.secondary",
                lineHeight: 1.9,
              }}
            >
            <Box component="li" sx={{ mb: 1.5 }}>
              Developed a web-based billing and customer record
              management system to replace manual billing and
              customer record maintenance in retail operations.
            </Box>

            <Box component="li" sx={{ mb: 1.5 }}>
              Implemented product-wise billing with quantity,
              unit price and automatic total calculation, along
              with customer record management including creation,
              updates and deletion.
            </Box>

            <Box component="li" sx={{ mb: 1.5 }}>
              Added Excel-based bill generation and date-range
              filtering/export of customer records using{" "}
              <strong>ExcelJS</strong> and <strong>Mongoose</strong>, enabling easy printing
              and historical record retrieval.
            </Box>

            <Box component="li">
              Built using the <strong>MERN Stack</strong> with
              REST APIs for frontend-backend communication and
              persistent customer data storage.
            </Box>
          </Box>

          <Stack
          direction="row"
          spacing={1}
          sx={{
            mt: 4,
            flexWrap: "wrap",
            gap: 1,
          }}
          >
            <Chip label="MongoDB" />
            <Chip label="Express.js" />
            <Chip label="React.js" />
            <Chip label="Node.js" />
            <Chip label="REST API" />
            <Chip label="ExcelJS" />
            </Stack>
          </Box>

          {/* PROJECT 2 */}

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 5,
              p: 5,
              border: "1px solid rgba(255,255,255,.08)",
              transition: ".3s",

              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow:
                  "0 20px 40px rgba(79,140,255,.18)",
              },
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
            >
              Customer Analysis
            </Typography>

            <Box
              component="ul"
              sx={{
              mt: 3,
              mb: 0,
              pl: 3,
              color: "text.secondary",
              lineHeight: 1.9,
            }}
            >
              <Box component="li" sx={{ mb: 1.5 }}>
                Analyzed supermarket sales data to identify
                customer purchasing patterns and generate
                actionable business insights from transactional
                data.
              </Box>

              <Box component="li" sx={{ mb: 1.5 }}>
                Performed data cleaning and ETL operations,
                including handling missing values, removing
                duplicate records and preparing the dataset
                for analysis.
              </Box>

              <Box component="li" sx={{ mb: 1.5 }}>
                Developed an interactive <strong>Power BI dashboard</strong>
                to visualize sales performance, customer trends
                and key business metrics for easier data-driven
                analysis.
              </Box>

              <Box component="li">
                Used <strong>Python, Pandas and NumPy</strong> for
                data processing and analysis, with{" "}
                <strong>Power BI</strong> for interactive
                visualization and dashboard development.
              </Box>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 4,
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Chip label="Python" />
              <Chip label="Pandas" />
              <Chip label="NumPy" />
              <Chip label="Power BI" />
            </Stack>
          </Box>

        </Stack>
      </Box>

            <Box
        id="education"
        sx={{
          py: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
        >
          Education
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 5,
            p: 5,
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Bachelor of Engineering
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "text.secondary",
            }}
          >
            Computer Science and Engineering
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            Sathyabama Institute of Science and Technology
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
            }}
          >
            2022 - 2026
          </Typography>

          <Chip
            label="CGPA : 7.74 / 10"
            color="primary"
            sx={{
              mt: 3,
              fontSize: 17
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            mt: 8,
            mb: 4,
            fontWeight: 700,
          }}
        >
          Certifications
        </Typography>

        <Stack spacing={3}>
          {[
            "Google - Prepare Data for Exploration",
            "IBM - Machine Learning",
            "MathWorks - Object Oriented Programming",
          ].map((certificate) => (
            <Box
              key={certificate}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 4,
                p: 3,
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <Typography
                fontWeight={600}
              >
                {certificate}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* ================= CONTACT ================= */}

      <Box
        id="contact"
        sx={{
          py: 10,
          mb: 10,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          align="center"
          gutterBottom
        >
          Let's Work Together
        </Typography>

        <Typography
          align="center"
          sx={{
            color: "text.secondary",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 2,
            mb: 6,
          }}
        >
          I'm currently open for internships,
          full-time opportunities and freelance
          projects.

          Feel free to reach out through the
          contact form below.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "340px 1fr",
            },
            bgcolor: "background.paper",
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.08)",
          }}
        >
          {/* LEFT */}

          <Box
            sx={{
              background:
                "linear-gradient(180deg,#4F8CFF,#8B5CF6)",
              p: 5,
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
            >
              Contact
            </Typography>

            <Typography
              sx={{
                mt: 4,
              }}
            >
              📧 sivamurugann.work@gmail.com
            </Typography>

            <Typography
              sx={{
                mt: 2,
              }}
            >
              📍 Chennai, India
            </Typography>

            <Typography
              sx={{
                mt: 2,
              }}
            >
              💼 Open to Full Time Opportunities
            </Typography>
          </Box>

          {/* RIGHT */}

          <Box
            sx={{
              p: {
                xs: 3,
                md: 5,
              },
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Box>

    </Container>
  );
}