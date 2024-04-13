// /pages/api/login.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const { connect, model } = mongoose;

// Connect to MongoDB
connect('mongodb+srv://Souvik:Zstar246@cluster0.pqchhcz.mongodb.net/user_data', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User model
const User = model('User', {
    email: String,
    password: String,
});

export async function POST(request, res) {
        try {
            const { email, password } = request.json();
            console.log(email);
            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return new Response("Invalid user",{status: 401})
            }

            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
              return new Response("Invalid user or password",{status: 401})
            }

            // Create and send JWT token
            const token = jwt.sign({ userId: user._id }, '26e4879d2ec9ed1581c20748de6eb00b77c10f2450d763880f97aae04cf61503');
            res.json({ token });
        } catch (error) {
            console.error(error);
            return new Response("Server error",{status: 501})
        }
    }

