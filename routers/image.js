const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (e) {
    next(e);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { title, url, userId } = req.body;
    const newImage = await Image.create({ title, url, userId });
    res.send(newImage);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
