import { Router } from "express";

const router = Router();
import { createUserControllerr, signInUserConroller } from "../controllers/userController.js";
router.post('/signup',createUserControllerr);
router.post('/signin',signInUserConroller)

export default router;