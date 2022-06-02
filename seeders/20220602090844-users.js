"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "leo@messi.com",
          fullName: "Leo Messi",
          password: 1234567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          email: "dan@redux.com",
          fullName: "Dan Abramov",
          password: 12345678,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
