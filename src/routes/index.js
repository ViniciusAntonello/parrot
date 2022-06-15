const express = require("express");

// Controllers
const postsController = require("../controllers/post/postController");
const usersController = require("../controllers/users/usersController");
const authController = require("../controllers/auth/authController");

// Validação de dados nas requisições
const userCreateValidate = require("../validations/users/create");
const postCreateValidate = require("../validations/posts/create");
const loginValidate = require("../validations/auth/login");

// Autenticação de dados
const auth = require("../middlewares/auth");

const routes = express.Router();

// Login
routes.post("/login", loginValidate, authController.login);

// Usuarios
routes.get("/", auth, usersController.listUsers);
routes.post("/create", userCreateValidate, usersController.createUser);
routes.put("/update/:id", auth, usersController.updateUser);
routes.delete("/delete/:id", auth, usersController.deleteUser);

// Posts
routes.get("/posts", auth, postsController.listPosts);
routes.post("/post", postCreateValidate, auth, postsController.createPost);
routes.put("/edit/:id", auth, postsController.updatePost);
routes.delete("/remove/:id", auth, postsController.deletePost);

module.exports = routes;
