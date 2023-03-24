import { IContacteResponse } from "../contactes/contactes.interface"

export interface IUserRequest {
    name: string
    email: string
    password: string
    phone: string
}

export interface IUserUpdate {
    id?: string
    name?: string
    email?: string
    password?: string
    phone?: string
}

export interface IUserResponse {
    id?: string
    name?: string
    email?: string
    phone?: string
    createdAt?: Date
    contactes?: IContacteResponse
}