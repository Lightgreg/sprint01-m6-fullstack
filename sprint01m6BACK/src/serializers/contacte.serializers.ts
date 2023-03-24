import * as  yup from "yup"
import { ObjectSchema } from "yup"
import { IContacteRequest, IContacteResponse } from "../interfaces/contactes/contactes.interface"
import { userContacteResponseSerializer } from "./user.serializers"

export const contacteRequestSerializer: ObjectSchema<IContacteRequest> = yup.object().shape({
  user: userContacteResponseSerializer,
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required()
})

export const contacteResponseSerializer: ObjectSchema<IContacteResponse> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  createdAt: yup.date().notRequired()
})

export const listContactesResponse = yup.array(contacteResponseSerializer)