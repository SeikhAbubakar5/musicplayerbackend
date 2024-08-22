const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
    try {
        const prevUser = await User.findOne({ email: userData.email });
        if (prevUser) {
            throw new Error("User already exists");
        }

        const user = new User(userData);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        user.password = hashedPassword;
        await user.save(); // Await the save operation

        return user;
    } catch (error) {
        throw error;
    }
};

const loginUser = async (userData) => {
    try {
        const { email, password } = userData;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User does not exist");
        }

        const isMatchPassword = await user.comparePassword(password);
        if (!isMatchPassword) {
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Added expiration
        return { token, userId: user._id }; // Return user ID instead of the full user object
    } catch (error) {
        throw error;
    }
};

module.exports = { registerUser, loginUser };
