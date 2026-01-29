const userModel = require('../models/user.model');
const blackListTokenModel = require('../models/blackListToken.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
    }
    const hashedPassword = await userModel.hashPassword(password);

    const newUser = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    const token = await newUser.generateAuthToken();
    res.status(201).json({ user: newUser, token });
};

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = await user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ user, token });
};

module.exports.getUserProfile = async (req, res) => {
    res.status(200).json({ user: req.user });
}

module.exports.logoutUser = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    res.clearCookie('token');

    await blackListTokenModel.create({ token });

    res.status(200).json({ message: 'Logged out successfully' });   
};