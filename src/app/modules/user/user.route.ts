import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.get("/:id", UserController.getSingleUser);
router.get("/", UserController.getAllUsers);
export const UserRoutes = router;
