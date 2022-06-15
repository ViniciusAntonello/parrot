const Sequelize = require("sequelize");
const dbConfig = require("../config/config");
const { Posts } = require("../models");
const { Users } = require("../models");

const connection = new Sequelize(dbConfig)

Users.init(connection);
Posts.init(connection);

Users.associate(connection.models)
Posts.associate(connection.models)

module.exports = connection;