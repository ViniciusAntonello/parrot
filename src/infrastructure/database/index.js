const Sequelize = require("sequelize");
const dbConfig = require("../../config/config");
const { Posts } = require("../database/models");
const { Users } = require("../database/models");

const connection = new Sequelize(dbConfig)

Users.init(connection);
Posts.init(connection);

Users.associate(connection.models)
Posts.associate(connection.models)

module.exports = connection;