const express = require("express");
const router = express.Router();

const Pomodoro = require("../models/Pomodoro");

router.get("/pomodoros/kill", async (req, res) => {
  await Pomodoro.deleteMany({});
  res.status(204).send();
});

module.exports = router;
