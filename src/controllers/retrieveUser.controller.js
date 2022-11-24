import retrieveUserService from "../services/retrieveUser.service";

const retrieveUserController = (req, res) => {
  const [status, foundUser] = retrieveUserService(req);

  return res.status(status).json(foundUser);
};

export default retrieveUserController;
