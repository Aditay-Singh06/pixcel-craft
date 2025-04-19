require("dotenv").config();

// import express
const express = require("express");
const cors = require('cors');
const userRouter = require("./routers/UserRouter");

// initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
  app.use(cors({
    origin: "*",
  }));
app.use(express.json());  
app.use('/user', userRouter);

app.get("/", (req, res) => {
  res.send("Hello I am root!");
});

app.get("/add", (req, res) => {
    res.send("response from add");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
