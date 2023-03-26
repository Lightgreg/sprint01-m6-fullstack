import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { ILoginRequest } from "../../interfaces/login/login.interface";


const loginService = async (
  userData: ILoginRequest
): Promise<object> => {
  const userRep = AppDataSource.getRepository(User);

  const user = await userRep.findOneBy({
    email: userData.email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 401);
  }

  const passwordMatch = await compare(userData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 401);
  }

  const token = jwt.sign(
    {},
    "SECRET_KEY",
    {
      subject: user.id,
      expiresIn: "72h",
    }
  );

  return { token: token, id: user.id };
};

export default loginService;
