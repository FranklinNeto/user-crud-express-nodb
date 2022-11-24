import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const createSessionService = (email, password) => {
  const userLogin = users.find((user) => user.email === email);

  if (!userLogin) {
    return [401, { message: "Email ou senha inválidos" }];
  }

  const passwordMatch = bcrypt.compareSync(password, userLogin.password);

  if (!passwordMatch) {
    return [401, { message: "Email ou senha inválidos" }];
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: userLogin.id,
  });

  return [200, { token }];
};

export default createSessionService;
