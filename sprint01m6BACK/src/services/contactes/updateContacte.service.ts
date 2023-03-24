import AppDataSource from "../../data-source"
import { Contacte } from "../../entities/contacte.entity"
import { IContacteUpdate } from "../../interfaces/contactes/contactes.interface"
import { contacteResponseSerializer } from "../../serializers/contacte.serializers"

const updateContacteService = async (idContacte: string, updatedContacte: IContacteUpdate) => {
  const contacteRep = AppDataSource.getRepository(Contacte)

  const findContacte = await contacteRep.findOne({
    where: {
      id: idContacte
    }
  })

  const updateContacte = contacteRep.create({
    ...findContacte,
    ...updatedContacte
  })
  await contacteRep.save(updateContacte)

  const dataResponse = contacteResponseSerializer.validate(updateContacte, {
    stripUnknown: true
  })

  return dataResponse
}

export default updateContacteService;