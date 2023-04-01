import { Request, Response } from "express"
import createContacteService from "../services/contactes/createContacte.service"
import deleteContacteService from "../services/contactes/deleteContacte.service"
import listContactesService from "../services/contactes/listMyContactes.service"
import updateContacteService from "../services/contactes/updateContacte.service"


export const listMyContactesController = async (req, res: Response) => {
  const contactes = await listContactesService(req.user.id)
  return res.status(200).json(contactes)
}

export const createContacteController = async (req, res: Response) => {
  const contacte = await createContacteService(req.body, req.user.id)
  return res.status(201).json(contacte)
}

export const updateContacteController = async (req: Request, res: Response) => {
  const contacte = await updateContacteService(req.params.id, req.body)
  return res.status(201).json(contacte)
}

export const deleteContacteController = async (req: Request, res: Response) => {
  const contacte = await deleteContacteService(req.params.id)
  return res.status(200).json(contacte)
}