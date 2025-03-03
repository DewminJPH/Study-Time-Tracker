const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// User routes
router.get('/users', userController.getUsers); 
router.post('/createuser', userController.addUser); 
router.post('/updateuser', userController.updateUser); 
router.post('/deleteuser', userController.deleteUser); 

module.exports = router;