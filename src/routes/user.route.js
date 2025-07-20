import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();
router.route("/login").post(registerUser);

router.route("/register").post(registerUser);

export default router;
