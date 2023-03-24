import { IUserResponse } from "../users/users.interface"

export interface IContacteRequest {
  user: IUserResponse
  name: string
  email: string
  phone: string
}

export interface IContacteUpdate {
  name?: string
  email?: string
  phone?: string
}

export interface IContacteResponse {
  id?: string
  name?: string
  email?: string
  phone?: string
  createdAt?: Date
}