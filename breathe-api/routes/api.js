var express = require("express");
const app = require("../app");
var router = express.Router();
router.use(express.json());
const supabase = require("../db/connection");

/* GET home page. */
router.get("/data", async function (req, res, next) {
  const { data, error } = await supabase.from("data").select();
  console.log(data);

  res.send(data);
});

router.post("/data", async function (req, res, next) {
  const { data, error } = await supabase.from("data").insert(req.body).select();
  console.log(req.body);
  if (error) {
    res.send(error);
  } else {
    res.send(data);
  }
});

module.exports = router;
