const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.error(err));

//inorder for us to run it in the browser
app.use("/", (req, res) => {
  console.log("hey this is main url ");
});

app.listen("5001", () => {
  console.log("backend is running");
});
