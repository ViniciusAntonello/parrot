const { Model, DataTypes } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//   class Posts extends Model {
//     static init(sequelize) {
//       super.init({
//         content: DataTypes.STRING,
//         user_id: DataTypes.INTEGER,
//       });
//     }
//   }
//   Posts.init(
//     {
//       content: DataTypes.STRING,
//       user_id: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: "Posts",
//     }
//   );
//   return Posts;
// };

class Posts extends Model {
  static init(sequelize){
    super.init({
      content: DataTypes.STRING,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            schema: 'handson4'
          },
          key: 'id'
        },
        // allowNull: false
      },
    },
    {
      sequelize
    })
  }
}

module.exports = Posts;