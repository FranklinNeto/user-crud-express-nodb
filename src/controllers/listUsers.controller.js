import listUsersService from "../services/listUsers.service";

const listUsersController = (req, res) => {
  const [status, data] = listUsersService();

  return res.status(status).json(data);
};

export default listUsersController;
