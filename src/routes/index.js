const express = require("express");
const postController = require("../controllers/post/postController");
const usersController = require("../controllers/users/usersController");

const routes = express.Router();

routes.get("/", usersController.listUsers);
routes.post("/", usersController.createUser);
routes.put("/update/:id", usersController.updateUser);
routes.delete("/delete/:id", usersController.deleteUser);

routes.get("/posts", postController.listPosts);
routes.post("/post", postController.createPost);

module.exports = routes;