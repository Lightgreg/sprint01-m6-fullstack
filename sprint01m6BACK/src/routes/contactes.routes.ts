import { Router } from "express";
import { createContacteController, deleteContacteController, listMyContactesController, updateContacteController, } from "../controllers/contacte.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middleware";

const contacteRoutes = Router();

contacteRoutes.post("", validateTokenMiddleware, createContacteController);
contacteRoutes.get("", validateTokenMiddleware, listMyContactesController);
contacteRoutes.patch("/:id", updateContacteController);
contacteRoutes.delete("/:id", deleteContacteController);

export default contacteRoutes;