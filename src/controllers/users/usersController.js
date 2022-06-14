const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  async listUsers(req, res) {
    try {
      const users = await Users.findAll();
      res.status(201).json(users);
    } catch (error) {
      res.status(400).json(`Falha ao listar usuários: ${error}`);
    }
  },

  async createUser(req, res) {
    try {
      const { name, email, apartment, password } = req.body;
      const newPassword = bcrypt.hashSync(password, 10)

      const userExist = await Users.count({
        where: { email },
      });

      if (userExist) {
        return res.status(406).json(`E-mail já cadastrado!`);
      }

      const newUser = await Users.create({
        name,
        email,
        apartment,
        password: newPassword,
      });

      res.status(201).json(`Usuário cadastrado com sucesso!`);
    } catch (error) {
      console.log(
        `Falha ao cadastrar usário, verifique os dados e tente novamente\n ${error}`
      );
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { name, email, apartment, password } = req.body;

      const userExist = await Users.count({
        where: { id },
      });

      if (!userExist) {
        return res.status(400).json(`Usuário não encontrado!`);
      }

      const userUpdated = await Users.update(
        {
          name,
          email,
          apartment,
          password,
        },
        {
          where: { id },
        }
      );

      res.status(201).json(`Usuário atualizado com sucesso!`);
    } catch (error) {
      res.status(400).json(`Falha ao atualizar usuário!\z ${error}`);
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const userExist = await Users.count({
        where: { id },
      });

      if (!userExist) {
        return res.status(400).json(`Usuário não encontrado!`);
      }

      await Users.destroy({ where: { id } });

      res.status(201).json(`Usuário removido com sucesso`);
    } catch (error) {
      res.status(400).json(`Falha ao deletar usuário\n ${error}`);
    }
  },
};
