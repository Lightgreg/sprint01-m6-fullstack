import { IContacteResponse } from "./contactes.interface"

export interface IUserRequest {
    name: string
    email: string
    phone: string
}

export interface IUserResponse{
    id?: string
    name?: string
    email?: string
    phone?: string
    createdAt?: Date
    contactes?: IContacteResponse
}