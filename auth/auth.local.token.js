const JWT = require('jsonwebtoken');

// Verifica el token (x-token)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['x-token'];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

// Verifica el token y que sea el mismo usuario o el Admin
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (req.user.id === req.params.id || req.user.role === 'ADMIN') {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

// Verifica el token y que sea admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'ADMIN') {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
};
