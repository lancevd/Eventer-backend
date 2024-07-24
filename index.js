import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import eventRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js"; 

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes); // Use auth routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
