const express = require("express");
const router = express.Router();

const Pomodoro = require("./models/Pomodoro");

router.get("/pomodoros", async (req, res) => {
  const pomodoros = await Pomodoro.find();
  res.send(pomodoros);
});

router.post("/pomodoros", async (req, res) => {
  const pomodoro = new Pomodoro({
    startTime: req.body.startTime,
    duration: req.body.duration,
  });
  await pomodoro.save();
  res.send(pomodoro);
});

module.exports = router;
