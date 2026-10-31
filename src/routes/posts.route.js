import { Router } from "express";
import PostControllers from '../controllers/Post.controller.js';

const postsRouter = Router();

postsRouter.get('/get',PostControllers.fetchPost);
postsRouter.post('/create',PostControllers.createPost);
postsRouter.put('/update:id',PostControllers.updatePost);
postsRouter.delete('/delete:id',PostControllers.deletePost);

export default postsRouter;