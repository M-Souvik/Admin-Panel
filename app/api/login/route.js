// /pages/api/login.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const { connect, model } = mongoose;

// Connect to MongoDB
connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User model
const User = model('User', {
    email: String,
    password: String,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Create and send JWT token
            const token = jwt.sign({ userId: user._id }, '26e4879d2ec9ed1581c20748de6eb00b77c10f2450d763880f97aae04cf61503');
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
