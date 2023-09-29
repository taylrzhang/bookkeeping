const express = require("express");
const models = require("./models");

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const app = express();

const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', authRouter);
app.use('/api', apiRouter);


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
