const express = require('express');
const router = express.Router();
const usersController = require('../controller/users');
const authenticateToken = require('../middlewares/userAuth');

router.post('/register', usersController.register);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});
router.post('/login', usersController.logIn);
router.put('/:id/password', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;

