import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const deleteUserService = async (userId: string): Promise<{}> => {
  const usersRep = AppDataSource.getRepository(User)

  const findUser = await usersRep.findOneByOrFail({  
      id: userId    
  })

  await usersRep.remove(findUser)

  return {}
}

export default deleteUserService;