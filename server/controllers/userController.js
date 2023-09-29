const jwt = require("jsonwebtoken");
require('dotenv').config();


const userController = {};

userController.checkToken = (req, res, next) => {
  console.log("get cookie", req.cookies)

  const token = req.cookies.jwtToken;

  if(!token)  res.json({msg: 'token missing', data: null});

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if(err) {
      return res.status(401).json({ message: 'Token verification failed.' });
    }

    req.user = decoded;
  })
  return next();
}


module.exports = userController