import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/users/users.interface"
import { userResponseSerializer } from "../../serializers/user.serializers"



const updateUserService = async (IdUser: string, updatedUser: IUserUpdate) => {
  const usersRep = AppDataSource.getRepository(User)

  const findUser = await usersRep.findOne({
    where: {
      id: IdUser
    }
  })

  const updateUser = usersRep.create({
    ...findUser,
    ...updatedUser
  })
  await usersRep.save(updateUser)

  const dataResponse = userResponseSerializer.validate(updateUser, {
    stripUnknown: true
  })

  return dataResponse
}

export default updateUserService;