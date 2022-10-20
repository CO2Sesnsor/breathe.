var express = require("express");
var router = express.Router();

const supabase = require("../db/connection");

/* GET home page. */
router.get("/data", async function (req, res, next) {
  const { data, error } = await supabase.from("data").select();
  console.log(data);

  res.send(data);
});

router.post("/data", async function (req, res, next) {
  const { data, error } = await supabase.from("data").insert(req.body).select();

  if (error) {
    res.send(error);
  } else {
    res.send(data);
  }
});

module.exports = router;
