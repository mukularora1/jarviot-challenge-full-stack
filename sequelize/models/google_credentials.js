"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class google_credentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.entity, { foreignKey: "entity_id" });
    }
  }
  google_credentials.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      access_token: { type: DataTypes.TEXT, allowNull: false },
      name: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "google_credentials",
      freezeTableName: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      defaultScope: {
        attributes: { exclude: ["created_at"] },
      },
    }
  );
  return google_credentials;
};
