const express = require('express');
const { User } = require("../models");
require('dotenv').config();
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post('/signup', (req, res) => {
  const {email, password} = req.body;
  const newUser = new User({
    email, 
    password
  });
  
  newUser.save()
    .then(() => {
      // Document saved successfully
      console.log('User saved successfully.');
      res.send({msg: "User saved successfully."})
    })
    .catch((err) => {
      // Handle the error here
      console.error('Error saving user:', err);
    });
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the provided credentials are valid
  User.findOne({ email })
    .then(user => {
      //user: 
      // {
      //   [0]   id: '65164c3982e037d84d9d426c',
      //   [0]   username: 'z@gamil.com',
      //   [0]   iat: 1695963632,
      //   [0]   exp: 1695967232
      //   [0] }  
      const isMatch = user.comparePassword(password);

      if (isMatch) {
        console.log('Authentication successful.');
      } else {
        console.log('Authentication failed. Passwords do not match.');
      }

      //Generate and send a JWT as a response
      const payload = {
        id: user._id.toString(),
        username: user.email,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
      // res.json({ token });

      res.cookie('jwtToken', token, { httpOnly: true });
      res.status(200).send('Logged in successfully');
    })
});

router.post('/logout', (req, res) => {
  res.clearCookie('jwtToken');
  res.status(200).json("logged out")
})

module.exports = router
