import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { userResponseSerializer } from "../../serializers/user.serializers"

const listUniqueUserService = async (userId:string) => {
  const usersRep = AppDataSource.getRepository(User)

  const user = await usersRep.findOne({
    where: {
      id: userId
    },
    relations: {
      contactes: true
    }
  })

  const dataResponse = userResponseSerializer.validate(user, {
    stripUnknown: true
  })

  return dataResponse
}

export default listUniqueUserService;