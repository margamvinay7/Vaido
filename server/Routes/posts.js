import express from "express";
import { createPost, deletePost, getPosts, updatePost,likePost } from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router=express.Router();
router.get('/',getPosts)

router.get('/auth',auth)
router.post('/create',createPost)
router.patch('/update',updatePost)
router.delete('/:id',deletePost)
router.patch('/:id/likepost',likePost);

export default router;