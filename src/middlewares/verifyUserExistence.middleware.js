import users from "../database";
const verifyUserExistenceMiddleware = (req, res, next) => {
  const userIndex = users.findIndex((user) => user.uuid === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  req.user = {
    ...req.user,
    userIndex: userIndex,
  };

  return next();
};

export default verifyUserExistenceMiddleware;
