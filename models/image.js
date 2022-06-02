"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      image.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  image.init(
    {
      title: DataTypes.STRING,
      url: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
