import retrieveUserService from "../services/retrieveUser.service";

const retrieveUserController = (req, res) => {
  const [status, data] = retrieveUserService(req.user.userIndex);

  return res.status(status).json(data);
};

export default retrieveUserController;
