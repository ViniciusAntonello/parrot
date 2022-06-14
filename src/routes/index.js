const express = require("express");
const postsController = require("../controllers/post/postController");
const usersController = require("../controllers/users/usersController");

const routes = express.Router();

routes.get("/", usersController.listUsers);
routes.post("/create", usersController.createUser);
routes.put("/update/:id", usersController.updateUser);
routes.delete("/delete/:id", usersController.deleteUser);

routes.get("/posts", postsController.listPosts);
routes.post("/post", postsController.createPost);
routes.put("/edit/:id", postsController.updatePost);
routes.delete("/remove/:id", postsController.deletePost);


module.exports = routes;