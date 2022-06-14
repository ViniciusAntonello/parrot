const Sequelize = require("sequelize");
const dbConfig = require("../config/config");
const Posts = require("../models/Posts");
const Users = require("../models/Users");


const connection = new Sequelize(dbConfig)

Users.init(connection);
Posts.init(connection);

Users.associate(connection.models)
Posts.associate(connection.models)

module.exports = connection;