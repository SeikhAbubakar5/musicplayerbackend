const userService = require("../services/userService");

const registerUser = async (req, res) => {
    try {
        const userData = req.body;

        const user = await userService.registerUser(userData);

        res.status(201).json({
            message: "Successfully registered",
            userId: user._id // Returning only the user ID
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const userData = req.body;

        const { token, userId } = await userService.loginUser(userData);
        res.status(200).json({
            message: "User successfully logged in",
            token,
            userId
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };
