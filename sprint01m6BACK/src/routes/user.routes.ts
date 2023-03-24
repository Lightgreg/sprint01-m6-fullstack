import { Router } from "express";
import { createUsersController, deleteUsersController, listAllUsersController, updateUsersController } from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", listAllUsersController);
userRoutes.patch("/:id", updateUsersController);
userRoutes.delete("", deleteUsersController);

export default userRoutes;
