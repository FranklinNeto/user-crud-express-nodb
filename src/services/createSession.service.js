import users from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";

const createSessionService = async (email, password) => {
  const userLogin = users.find((user) => user.email === email);

  if (!userLogin) {
    return [401, { message: "Wrong email/password" }];
  }

  const passwordMatch = await compare(password, userLogin.password);

  if (!passwordMatch) {
    return [401, { message: "Wrong email/password" }];
  }

  const token = jwt.sign({ isAdm: userLogin.isAdm }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: userLogin.uuid,
  });

  return [200, { token }];
};

export default createSessionService;
