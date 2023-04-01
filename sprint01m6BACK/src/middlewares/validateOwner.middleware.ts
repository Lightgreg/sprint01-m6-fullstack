import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../errors/AppError";

const validateThisIAmMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (req.params.id === req.body.id) {
    return next();
  }

  throw new AppError("Need more permission for this route", 401);
};

export default validateThisIAmMiddleware;
