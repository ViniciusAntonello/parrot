const { Users } = require("../../../infrastructure/database/models");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../../config/secret")

const authController = {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: { email },
    });

    if(!user){
        return res.status(400).json("Email ou senha inválidos");
    }

    if(!bcrypt.compareSync(password, user.password)){
        return res.status(401).json("Email ou senha inválidos");
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        apartment: user.apartment
    },
    secret.key
    );

    let user_data = [token, {
      id: user.id,
      email: user.email,
      name: user.name,
      apartment: user.apartment
    }];

    return res.json(user_data)
  },
};

module.exports = authController;
