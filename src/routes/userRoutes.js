import { Router } from "express";

const router = Router();
import { createUserControllerr } from "../controllers/userController.js";
router.post('/signup',createUserControllerr);

export default router;