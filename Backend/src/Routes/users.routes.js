import { Router } from "express";
import {login, register,addToUserHistory, getUserHistory} from "../Controllers/user.controller.js"
const router = Router();
router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").post(addToUserHistory)
router.route("/get_all_activity").get(getUserHistory)

export default router;
