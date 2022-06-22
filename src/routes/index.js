const express = require("express");

// Controllers
const postsController = require("../domain/posts/controllers/postController");
const usersController = require("../domain/users/controllers/usersController");
const authController = require("../domain/auth/controllers/authController");

// Validação de dados nas requisições
const userCreateValidate = require("../infrastructure/database/validations/users/create");
const postCreateValidate = require("../infrastructure/database/validations/posts/create");
const loginValidate = require("../infrastructure/database/validations/auth/login");

// Autenticação de dados
const auth = require("../middlewares/auth");

const routes = express.Router();

// Login
routes.post("/login", loginValidate, authController.login);

// Usuarios
routes.get("/", auth, usersController.listUsers);
routes.get("/user/:id", auth, usersController.listUserId);
routes.post("/create", userCreateValidate, usersController.createUser);
routes.put("/update/:id", auth, usersController.updateUser);
routes.delete("/delete/:id", auth, usersController.deleteUser);

// Posts
routes.get("/posts", auth, postsController.listPosts);
routes.post("/post", postCreateValidate, auth, postsController.createPost);
routes.put("/edit/:id", auth, postsController.updatePost);
routes.delete("/post/remove/:id", auth, postsController.deletePost);

module.exports = routes;
