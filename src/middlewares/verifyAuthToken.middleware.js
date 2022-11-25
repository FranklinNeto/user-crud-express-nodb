import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  const token = authToken.split(" ")[1]; //retira a string bearer do authToken

  return jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(404).json({
        message: error.message,
      });
    }

    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
    };

    next();
  });
};

export default verifyAuthTokenMiddleware;
