const PORT = 5000;

const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/pomodoro", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.listen(PORT, () => {
      console.log(`Server is live on http://localhost:${PORT}`);
    });
  });
