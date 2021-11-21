const PORT = 5000;

const express = require("express");
const pomodoroRoutes = require("./routes/pomodoro");
const devRoutes = require("./routes/pomodoro");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/pomodoro", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", pomodoroRoutes);
    app.use("/dev", devRoutes);

    app.listen(PORT, () => {
      console.log(`Server is live on http://localhost:${PORT}`);
    });
  });
