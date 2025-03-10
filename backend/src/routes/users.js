const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// JWT Secret Key (Use environment variables in production)
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
    if (!token) return res.status(403).json({ message: "Unauthorized" });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Invalid token" });
        req.user = decoded;
        next();
    });
};

// Register a New User
router.post('/register', async (req, res) => {
    try {
        const user = new User({ ...req.body });
        const data = await user.save();

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
});

// User Login (Generate Token)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Direct password comparison (UNSAFE in production)
        if (user.password !== password) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Protected Route: Get All Users (Requires JWT)
router.get('/', verifyToken, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

// Protected Route: Get User by ID
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
});

// Protected Route: Delete User
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted", data });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
});

// Protected Route: Update User
router.patch('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
});

module.exports = router;
