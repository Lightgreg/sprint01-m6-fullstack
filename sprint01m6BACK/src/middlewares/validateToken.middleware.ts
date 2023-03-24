import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../errors/AppError";

const validateTokenMiddleware = async (req, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError("Invalid Token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
    if (error) {
      return res.status(401).json(error);
    }
    req.user = {
      id: decoded.sub as string,
    };
    return next();
  });
};

export default validateTokenMiddleware;
