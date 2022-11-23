import { v4 } from "uuid";
import users from "../database";

const createUserService = (email, name) => {
  const isUserExists = users.find((user) => user.email === email);

  if (isUserExists) {
    throw new Error("Este email já foi cadastrado");
  }

  const newUser = {
    id: v4(),
    email,
    name,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
