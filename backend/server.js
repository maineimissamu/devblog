import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Routes
app.post("/api/auth/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});