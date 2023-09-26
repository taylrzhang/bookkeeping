const mongoose = require("mongoose");
require('dotenv').config();

//url to my MongoDB Atlas cluster

mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "transactionsKeeping",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const transacSchema = new Schema({
  name: { type: String, required: true },
  time: String,
  type: { type: String, required: true },
  amount:String,
  note:String
});

const Transac = mongoose.model("Transac", transacSchema);


module.exports = {
  Transac
};