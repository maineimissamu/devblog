//Imports
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

//Register route
router.post("/register", async (req, res) => {
    try {
        //Get email and password from request body
        const { email, password } = req.body;
        //Verify if user does not exist
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        //Create new user
        const user = await User.create({ email, password });
        //Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        //Send response with user data and token
        res.status(201).json({ 
            message: "User registered successfully", 
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }, 
            token 
        });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});

//Login route
router.post("/login", async (req, res) => {
    try {
        //Get email and password from request body
        const { email, password } = req.body;
        //Verify if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        //Compare password
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        //Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        //Send response with user data and token
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
})

export default router;