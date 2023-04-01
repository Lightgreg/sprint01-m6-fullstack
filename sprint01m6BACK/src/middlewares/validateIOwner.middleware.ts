import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../errors/AppError";
import AppDataSource from "../data-source";
import { Contacte } from "../entities/contacte.entity";
import { User } from "../entities/user.entity";

const validateIOwnerMiddleware = async (req, res: Response, next: NextFunction) => {

  const contacteRep = AppDataSource.getRepository(Contacte)
  const userRep = AppDataSource.getRepository(User)

  const findContacte = await contacteRep.findOne({
    where: {
      id: req.params.id
    },
    relations: {
      user: true
    }
  })

  const findUser = await userRep.findOne({
    where: {
      id: req.body.id
    }
  })

  if (findUser.id === findContacte.user.id) {
    return next();
  }
  throw new AppError("User not have permission", 401);
}

export default validateIOwnerMiddleware;
