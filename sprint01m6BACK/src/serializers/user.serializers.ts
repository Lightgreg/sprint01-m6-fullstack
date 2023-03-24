import * as  yup from "yup"
import { ObjectSchema} from "yup"
import { IUserRequest, IUserResponse } from "../interfaces/users/users.interface"
import { listContactesResponse } from "./contacte.serializers"

export const userRequestSerializer:ObjectSchema<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().email().required(),
  phone: yup.string().required() 
})

export const userResponseSerializer = yup.object().shape({  
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  createdAt: yup.date().notRequired(),
  contactes: listContactesResponse
})

export const userContacteResponseSerializer = yup.object().shape({  
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  createdAt: yup.date().notRequired()
})

export const listUsersResponse = yup.array(userResponseSerializer)