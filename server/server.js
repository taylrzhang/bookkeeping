const express = require("express");
const models = require("./models");

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/api", (req, res, next) => {
  models.Transac.find({})
    .exec()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log("ERROR:", err)
    });
});

app.post("/api/create", (req, res, next) => {
  const {name, time, type, amount, note} = req.body;
  models.Transac.create({
    name,
    time, 
    type, 
    amount, 
    note
  })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log("ERROR:", err)
    });
})

app.delete("/api/delete/:id", (req, res, next) => {
  const id = req.params.id;
  models.Transac.deleteOne({_id: id})
    .then(() => {
      console.log("data deleted")

    })
    .catch(err => {
      console.log("delete server error:", err)
    })
})

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);

module.exports = app;
