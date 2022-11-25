import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const [status, data] = updateUserService(req.user.userIndex, req.body);

  res.status(status).json(data);
};
export default updateUserController;
