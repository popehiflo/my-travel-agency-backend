const JWT = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.x-token;
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

module.exports = {
  verifyToken,
};
