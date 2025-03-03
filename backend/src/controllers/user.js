const User = require('../models/user');

// Add a new user
const addUser = (req, res) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name
    });

    user.save()
        .then(response => {
            res.json({ message: 'User added successfully', data: response });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error adding user', error: error.message });
        });
};

// Get all users
const getUsers = (req, res) => {
    User.find()
        .then(response => {
            res.json({ message: 'Users retrieved successfully', data: response });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving users', error: error.message });
        });
};

// Update a user
const updateUser = (req, res) => {
    const { id, name } = req.body;

    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ message: 'User updated successfully', data: response });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error updating user', error: error.message });
        });
};

// Delete a user
const deleteUser = (req, res) => {
    const { id } = req.body;

    User.deleteOne({ id: id })
        .then(response => {
            res.json({ message: 'User deleted successfully', data: response });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        });
};

module.exports = {
    addUser,
    getUsers,
    updateUser,
    deleteUser
};