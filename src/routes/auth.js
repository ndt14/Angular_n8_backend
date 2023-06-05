import express from "express";
import { getAll, signin, signup } from "../controllers/auth.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getAll);

export default router;
