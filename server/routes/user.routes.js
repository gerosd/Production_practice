import { Router } from 'express';
import userController from "../controllers/user.controller.js";

const router = new Router();

router.post('/user/register', userController.createUser);
router.post('/user/login', userController.loginUser);
router.get('/user/me', userController.getCurrentUser);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;