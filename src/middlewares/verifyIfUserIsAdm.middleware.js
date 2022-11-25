import users from "../database";

const verifyIfUserIsAdm = (req, res, next) => {
  const user = users.find((elem) => elem.uuid === req.user.id);

  if (!user.isAdm) {
    return res.status(403).json({
      message: "missing admin permissions",
    });
  }

  return next();
};

export default verifyIfUserIsAdm;
