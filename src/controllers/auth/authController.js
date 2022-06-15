const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret")

const authController = {
  async login(req, res) {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email,
      },
    });

    if(!user){
        return res.status(400).json("Email ou senha inválido");
    }

    if(!bcrypt.compareSync(password, user.password)){
        return res.status(401).json("Email ou senha inválido");
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        apartment: user.apartment
    },
    secret.key
    )
    return res.json(token)
  },
};

module.exports = authController;
