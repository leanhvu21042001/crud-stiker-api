const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

router.get("/", async (req, res) => {
  const stickers = await queries.getAll();
  return res.json(stickers);
});

module.exports = router;
