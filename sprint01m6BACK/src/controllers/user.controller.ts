import { hash } from "bcryptjs"
import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listAllUsersService from "../services/users/listAllUsers.service"
import listUniqueUserService from "../services/users/listUniqueUser.service"
import updateUserService from "../services/users/updateUser.service"


export const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService()
  return res.status(200).json(users)
}
export const listUniqueUserController = async (req: Request, res: Response) => {
  const users = await listUniqueUserService(req.params.id)
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
  if (req.body.password) {
    const { password } = req.body
    const hash_password = await hash(password, 10)
    req.body.password = hash_password    
  }
  const user = await updateUserService(req.params.id, req.body)
  return res.status(201).json(user)
}

export const deleteUsersController = async (req:Request, res: Response) => {
  const user = await deleteUserService(req.params.id)
  return res.status(201).json(user)
}