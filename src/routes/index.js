const express = require("express");
const usersController = require("../controllers/users/usersController");

const routes = express.Router();

routes.get("/", usersController.listUsers);
routes.post("/", usersController.createUser);
routes.put("/update/:id", usersController.updateUser);
routes.delete("/delete/:id", usersController.deleteUser);

module.exports = routes;