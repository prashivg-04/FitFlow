const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('Firstname, email, and password are required');
    };

    const newUser = await userModel.create({
        firstname,
        lastname,
        email,
        password
    });

    return newUser;
};