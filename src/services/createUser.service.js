import { v4 } from "uuid";
import users from "../database";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: v4(),
    email,
    name,
    password: hashedPassword,
  };

  users.push(newUser);

  return [201, newUser];
};

export default createUserService;
