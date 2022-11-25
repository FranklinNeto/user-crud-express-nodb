import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (req, res) => {
  const [status, data] = deleteUserService(req.user.userIndex);
  return res.status(status).json(data);
};

export default deleteUserController;
