const express = require('express');
const models = require("../models");
const userController = require("../controllers/userController")

const router = express.Router();

router.get( "/", userController.checkToken, (req, res, next) => {
  console.log(req.user)
  models.Transac.find({userId: req.user.id})
    .exec()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log("ERROR:", err)
    });
});

router.post("/create", userController.checkToken, (req, res, next) => {
  const {name, time, type, amount, note} = req.body;
  console.log(req.user);

  models.Transac.create({
    name,
    time, 
    type, 
    amount, 
    note,
    userId: req.user.id
  })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log("ERROR:", err)
    });
})

router.delete("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  models.Transac.deleteOne({_id: id})
    .then(() => {
      console.log("data deleted")

    })
    .catch(err => {
      console.log("delete server error:", err)
    })
})

module.exports = router