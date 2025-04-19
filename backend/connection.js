require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.DB_URL;
mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
  
module.exports = mongoose;
