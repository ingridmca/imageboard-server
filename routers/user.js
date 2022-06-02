const { Router } = require("express");
const User = require("../models").user;
const Image = require("../models").image;

const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [Image],
      attributes: ["fullName"],
    });
    res.send(users);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
