import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactroutes.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'; 

app.use(cors({
  origin: allowedOrigin,
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Root Health Endpoint
app.get('/', (req, res) => {
  res.send('Portfolio API Server is Running');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});