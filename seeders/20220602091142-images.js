"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "Hello image",
          url: "https://previews.123rf.com/images/jsddesign/jsddesign1502/jsddesign150200025/36351206-hello.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hello image 2",
          url: "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
