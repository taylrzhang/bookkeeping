const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
require('dotenv').config();

const SALT_WORK_FACTOR = 10;

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
  note:String,
  userId: String
});

const Transac = mongoose.model("Transac", transacSchema);

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema)


module.exports = {
  Transac,
  User
};