import { Router } from "express";
import { createUsersController, deleteUsersController, listAllUsersController, listUniqueUserController, updateUsersController } from "../controllers/user.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", validateTokenMiddleware, listAllUsersController);
userRoutes.get("/:id", listUniqueUserController);
userRoutes.patch("/:id", validateTokenMiddleware, updateUsersController);
userRoutes.delete("/:id", deleteUsersController);

export default userRoutes;
