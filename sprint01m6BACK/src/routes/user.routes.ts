import { Router } from "express";
import { createUsersController, deleteUsersController, listAllUsersController, listUniqueUserController, updateUsersController } from "../controllers/user.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";
import validateThisIAmMiddleware from "../middlewares/validateOwner.middleware";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", validateTokenMiddleware, listAllUsersController);
userRoutes.get("/:id", listUniqueUserController);
userRoutes.patch("/:id", validateTokenMiddleware, validateThisIAmMiddleware, updateUsersController);
userRoutes.delete("/:id", validateTokenMiddleware, validateThisIAmMiddleware, deleteUsersController);

export default userRoutes;
