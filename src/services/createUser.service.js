import { v4 } from "uuid";
import users from "../database";
import * as bcrypt from "bcryptjs";

const createUserService = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = {
    uuid: v4(),
    createdOn: new Date(),
    updatedOn: new Date(),
    ...user,
    password: hashedPassword,
  };

  users.push(newUser);

  const { password, ...returnedDataUser } = newUser;

  return [201, returnedDataUser];
};

export default createUserService;
