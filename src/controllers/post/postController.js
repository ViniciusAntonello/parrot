const Posts = require("../../models/Posts");

module.exports = {
    async listPosts(req, res) {
        try {
          const posts = await Posts.findAll();
          res.status(201).json(posts);
        } catch (error) {
          res.status(400).json(`Falha ao listar posts: ${error}`);
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
            `Falha ao cadastrar post, verifique os dados e tente novamente\n ${error}`
          );
        }
      },
};
