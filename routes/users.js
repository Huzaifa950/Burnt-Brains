const express = require('express');
const router = express.Router();
const usersController = require('../controller/users');
// const authenticateToken = require('../middlewares/userAuth');

router.post('/register', usersController.register);
router.post('/login', usersController.logIn);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;