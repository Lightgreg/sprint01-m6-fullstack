import AppDataSource from "../../data-source"
import { Contacte } from "../../entities/contacte.entity"
import { User } from "../../entities/user.entity"
import { IContacteRequest, IContacteResponse } from "../../interfaces/contactes/contactes.interface"
import { contacteResponseSerializer } from "../../serializers/contacte.serializers"


const createContacteService = async (data: IContacteRequest, userId:string): Promise<IContacteResponse> => {
  const usersRep = AppDataSource.getRepository(User)
  const contacteRep = AppDataSource.getRepository(Contacte)
  const user = await usersRep.findOneBy({ id: userId })

  data.user = user

  const contacte = contacteRep.create(data)
  await contacteRep.save(contacte)

  const contacteResponse = await contacteResponseSerializer.validate(contacte, {
    stripUnknown: true
  })

  return contacteResponse
}

export default createContacteService