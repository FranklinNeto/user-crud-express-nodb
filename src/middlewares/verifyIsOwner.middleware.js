const verifyIsOwnerMiddleware = (req, res, next) => {
  const { isAdm, id } = req.user;

  if (isAdm) {
    return next();
  }

  const idParams = req.params.id;

  if (idParams !== id) {
    return res.status(403).json({
      message: "missing admin permissions",
    });
  }
  return next();
};
export default verifyIsOwnerMiddleware;
