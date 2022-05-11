const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("post");
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  res.json({ name: name, phone: phone, date: date });
  next(); //다음 미들웨어로 넘어간다.
});

router.post("/", (req, res) => {
  res.redirect("/expost");
});

module.exports = router;
