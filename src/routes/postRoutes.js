import { Router } from "express";
import { addPost, createUserPost, delPost, findAllPost, getPostById, update } from "../controllers/PostController.js";

const router = Router();

router.post('/posts', addPost);
router.get('/posts', findAllPost);

router.get('/posts/:id', getPostById);
router.put('/posts/:id', update);
router.delete('/posts/:id', delPost);


export default router;