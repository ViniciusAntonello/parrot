const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static init(sequelize) {
      super.init({
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
      });
    }
  }
  Posts.init(
    {
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
