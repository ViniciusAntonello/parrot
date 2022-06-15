const { Posts } = require("../../models");

module.exports = {
  async listPosts(req, res) {
    try {
      const posts = await Posts.findAll({
        include: { association: "publications" }
      });
      res.status(201).json(posts);
    } catch (error) {
      res.status(400).json(`Falha ao listar usuários: ${error}`);
    }
  },

  async createPost(req, res) {
    try {
      const { content, user_id } = req.body;

      const newPost = await Posts.create({
        content,
        user_id,
      });

      res.status(201).json(`Post cadastrado com sucesso!`);
    } catch (error) {
      console.log(
        `Falha ao cadastrar Post, verifique os dados e tente novamente\n ${error}`
      );
    }
  },

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { content, user_id } = req.body;

      const userUpdated = await Posts.update(
        {
          content,
          user_id,
        },
        {
          where: { id },
        }
      );

      res.status(201).json(`Post atualizado com sucesso!`);
    } catch (error) {
      res.status(400).json(`Falha ao atualizar Post!\n ${error}`);
    }
  },

  async deletePost(req, res) {
    try {
      const { id } = req.params;

      await Posts.destroy({ where: { id } });

      res.status(201).json(`Post removido com sucesso`);
    } catch (error) {
      res.status(400).json(`Falha ao deletar Post\n ${error}`);
    }
  },
};
