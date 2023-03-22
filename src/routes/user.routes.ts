import { Router } from "express";
import { createUsersController, listAllUsersController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", listAllUsersController);

export default userRoutes;
