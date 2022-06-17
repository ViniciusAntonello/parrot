const { Model, DataTypes } = require('sequelize');

class Posts extends Model {
    static init(sequelize){
      super.init({
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      }, { 
        sequelize
       })
    }

    static associate(models){
      this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'publications' });
    }
  }



  module.exports = Posts;