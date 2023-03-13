import Post from "./Post.js";

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const post = await Post.create({author, title, content, picture})
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try{
            const post = await Post.findAll()
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try{
            console.log(req.query)
            const {id} = req.params
            if (!id){
                return res.status(400).json({'message': 'Id не указан'})
            }
            const post = await Post.findByPk(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try{
            const post = req.body
            
            if (!post.id){
                return res.status(400).json({'message': 'Id не указан'})
            }
            
            const updatedPost = await Post.findByPk(post.id)
            await updatedPost.update(post)
            return res.json(updatedPost)            
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try{
            const {id} = req.params
            if (!id){
                return res.status(400).json({'message': 'Id не указан'})
            }

            const deletePost = await Post.findByPk(id)
            await deletePost.destroy()
            return res.json(deletePost)         
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();
