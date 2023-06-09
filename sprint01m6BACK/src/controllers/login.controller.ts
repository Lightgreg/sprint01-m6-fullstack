import { Request, Response } from "express"
import loginService from "../services/login/login.service"

export const loginController = async (req: Request, res: Response) => {
  const users = await loginService(req.body)
  return res.status(200).json(users)
}