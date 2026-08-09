import React, { useState } from "react";
import axios from "axios";

import {
  Box,
  TextField,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      error: "",
      success: "",
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL
        ? `${import.meta.env.VITE_API_URL}/contact/send`
        : "http://localhost:5001/api/contact/send";

      const response = await axios.post(apiUrl, formData);

      setStatus({
        loading: false,
        error: "",
        success:
          response.data.message ||
          response.data.success ||
          "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error:
          error.response?.data?.error ||
          "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
      >
        Send a Message
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 2,
        }}
      >
        Fill out the form below and I'll get
        back to you as soon as possible.
      </Typography>

      {status.error && (
        <Alert severity="error">
          {status.error}
        </Alert>
      )}

      {status.success && (
        <Alert severity="success">
          {status.success}
        </Alert>
      )}
            <TextField
        fullWidth
        label="Full Name"
        name="name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        disabled={status.loading}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "#1E293B",

            "& fieldset": {
              borderColor: "rgba(255,255,255,.12)",
            },

            "&:hover fieldset": {
              borderColor: "#4F8CFF",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F8CFF",
              borderWidth: "2px",
            },
          },

          "& .MuiInputLabel-root": {
            color: "#94A3B8",
          },

          "& .MuiInputBase-input": {
            color: "#fff",
          },
        }}
      />

      <TextField
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        disabled={status.loading}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 3,
            backgroundColor: "#1E293B",

            "& fieldset": {
              borderColor: "rgba(255,255,255,.12)",
            },

            "&:hover fieldset": {
              borderColor: "#4F8CFF",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F8CFF",
              borderWidth: "2px",
            },
          },

          "& .MuiInputLabel-root": {
            color: "#94A3B8",
          },

          "& .MuiInputBase-input": {
            color: "#fff",
          },
        }}
      />

      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={6}
        variant="outlined"
        value={formData.message}
        onChange={handleChange}
        disabled={status.loading}
        required
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 1.8,
            backgroundColor: "#1E293B",

            "& fieldset": {
              borderColor: "rgba(255,255,255,.12)",
            },

            "&:hover fieldset": {
              borderColor: "#4F8CFF",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#4F8CFF",
              borderWidth: "2px",
            },
          },

          "& .MuiInputLabel-root": {
            color: "#94A3B8",
          },

          "& textarea": {
            color: "#fff",
          },
        }}
      />
            <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={status.loading}
        endIcon={
          status.loading ? (
            <CircularProgress
              size={20}
              color="inherit"
            />
          ) : (
            <SendIcon />
          )
        }
        sx={{
          mt: 2,
          py: 1.8,
          borderRadius: 3,
          fontWeight: 700,
          fontSize: "1rem",
          background:
            "linear-gradient(90deg,#4F8CFF,#8B5CF6)",
          transition: ".3s",

          "&:hover": {
            background:
              "linear-gradient(90deg,#3B82F6,#7C3AED)",
            transform: "translateY(-2px)",
            boxShadow:
              "0 10px 25px rgba(79,140,255,.35)",
          },

          "&:disabled": {
            color: "#fff",
            opacity: 0.7,
          },
        }}
      >
        {status.loading
          ? "Sending..."
          : "Send Message"}
      </Button>
    </Box>
  );
}