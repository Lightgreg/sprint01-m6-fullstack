import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserRequest } from "../../interfaces/users/users.interface"
import { userResponseSerializer } from "../../serializers/user.serializers"

const createUserService = async (data: IUserRequest) => {
  const usersRep = AppDataSource.getRepository(User)

  const createUser = usersRep.create({
    ...data
  })

  await usersRep.save(createUser)

  const userResponse = await userResponseSerializer.validate(createUser, {
    stripUnknown: true
  })

  return userResponse
}

export default createUserService