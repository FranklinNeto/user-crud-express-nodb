import users from "../database";

const verifyIfUserIsAdm = (req, res, next) => {
  const user = users.find((elem) => elem.uuid === req.user.id);

  if (user === undefined) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  if (!user.isAdm) {
    return res.status(403).json({
      message: "missing admin permissions",
    });
  }

  return next();
};

export default verifyIfUserIsAdm;
