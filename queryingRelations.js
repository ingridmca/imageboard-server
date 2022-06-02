const User = require("./models").user;
const Image = require("./models").image;

async function imagesWithUsers() {
  const images = await Image.findAll({
    raw: true,
    include: [User],
  });

  console.log(images);
}

imagesWithUsers();
