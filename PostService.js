import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName });
        return createdPost;
    }

    async getAll() {
        const post = await Post.findAll();
        return post;
    }

    async getOne(id) {
        if (!id){
            throw new Error('Id не указан')
        }
        const post = await Post.findByPk(id);
        return post;
    }

    async update(post) {
        if (!post.id){
            throw new Error('Id не указан');
        }
            
        const updatedPost = await Post.findByPk(post.id)
        await updatedPost.update(post)
        return updatedPost
    }

    async delete(id) {
        if (!id){
            throw new Error('Id не указан');
        }

        const deletePost = await Post.findByPk(id)
        await deletePost.destroy()
        return deletePost
    }
}

export default new PostService();
