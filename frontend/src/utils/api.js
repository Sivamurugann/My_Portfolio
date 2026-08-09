import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact/send`, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || 'An unexpected error occurred.';
  }
};