export interface IContacteRequest {
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