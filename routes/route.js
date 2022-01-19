const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require ('../middleware/Authenticate')

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/users', authenticate, userController.getUsers);
router.get('/user/:userId', authenticate, userController.getUser);
router.put('/user/:userId', authenticate, userController.updateUser);
router.delete('/user/:userId', authenticate, userController.deleteUser);


module.exports = router;