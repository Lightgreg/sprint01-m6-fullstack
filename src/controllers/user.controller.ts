import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import listAllUsersService from "../services/listAllUsers.service"

export const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService()
  return res.status(200).json(users)
}

export const createUsersController = async (req: Request, res: Response) => {
  const user = await createUserService(req.body)
  return res.status(201).json(user)
}