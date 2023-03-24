import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { userResponseSerializer } from "../../serializers/user.serializers"

const listContactesService = async (IdUser) => {
    const userRep = AppDataSource.getRepository(User)
        
    const listContactes = await userRep.findOne({
        where: {
            id: IdUser
        },
        relations: {
            contactes:true
        }
    })

    const dataResponse = userResponseSerializer.validate(listContactes, {
        stripUnknown: true
    })

    return (await dataResponse).contactes
}

export default listContactesService;