import AppDataSource from "../../data-source"
import { Contacte } from "../../entities/contacte.entity"

const deleteContacteService = async (contacteId: string): Promise<{}> => {
  const contacteRep = AppDataSource.getRepository(Contacte)

  const findContacte = await contacteRep.findOneBy({
    id: contacteId
  })

  await contacteRep.remove(findContacte)

  return {}
}

export default deleteContacteService;