const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const AuthController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', UserController.register);
router.post('/login', AuthController.login);

router.get('/users', authMiddleware, UserController.getAllUsers);
router.get('/users/:id', authMiddleware, UserController.getUserById);

module.exports = router;
