import users from "../database";
import jwt from "jsonwebtoken";

const retrieveUserService = (req) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return [401, { message: "Missing authorization token." }];
  }

  const token = authToken.split(" ")[1]; //retira a string bearer do authToken

  return jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return [401, { message: error.message }];
    }

    const userId = req.params.id;
    const foundUser = users.find((user) => user.id === userId);

    return [200, foundUser];
  });
};

export default retrieveUserService;
