const User = require('../models/User');

// Create New User
exports.createNewUser = async (req, res) => {
    const { userName, email } = req.body;
    try {
        const isUser = await User.findOne({ email: email });
        if (isUser) {
            return res.status(400).json({
                message: 'User already exist!'
            });
        }

        const newUser = new User({
            userName,
            email
        });
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get User by Email
exports.getSingleUser = async (req, res) => {
    const { email } = req.params
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                message: 'User not found!'
            });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}