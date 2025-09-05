import express from "express";
import {
  Delete,
  Getme,
  Login,
  Logout,
  Register,
  Update,
} from "../controllers/authControllers.js";
import { Protect } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/me", Protect, Getme);
router.put("/update", Protect, Update);
router.post("/logout", Protect, Logout);
router.post("/delete", Protect, Delete);

export default router;