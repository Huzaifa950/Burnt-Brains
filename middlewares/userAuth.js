const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateToken;