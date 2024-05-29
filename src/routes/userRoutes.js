import { Router } from "express";
import { addUser, findAllUsers, getUserByEmail, update, delUser, createUserPost } from "../controllers/UserController.js";

const router = Router();

router.post('/users', addUser);
router.get('/users', findAllUsers)

router.get('/users/:email', getUserByEmail);
router.put('/users/:email', update);
router.delete('/users/:email', delUser);
router.post('/users/post', createUserPost)

export default router;