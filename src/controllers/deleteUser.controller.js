const deleteUserController = (req, res) => {
  const [status, data] = deleteUserService(req.userIndex);
  return res.status(status).json(data);
};

export default deleteUserController;
