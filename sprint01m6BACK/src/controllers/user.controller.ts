import { hash } from "bcryptjs"
import { Request, Response } from "express"
import AppError from "../errors/AppError"
import jwt from "jsonwebtoken";
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listAllUsersService from "../services/users/listAllUsers.service"
import updateUserService from "../services/users/updateUser.service"


export const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService()
  return res.status(200).json(users)
}

export const createUsersController = async (req: Request, res: Response) => {
  const { password } = req.body
  const hash_password = await hash(password, 10)
  req.body.password = hash_password
  const user = await createUserService(req.body)
  return res.status(201).json(user)
}

export const updateUsersController = async (req: Request, res: Response) => {
  const user = await updateUserService(req.params.id, req.body)
  return res.status(201).json(user)
}

export const deleteUsersController = async (req: Request, res: Response) => {
  let token = req.headers.authorization
  if (!token) {
    throw new AppError("Invalid Token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
    if (error) {
      return res.status(401).json(error);
    }
    req.body = {
      id: decoded.sub as string,
    };
  
  })
  const user = await deleteUserService(req.body.id)
  return res.status(201).json(user)
}