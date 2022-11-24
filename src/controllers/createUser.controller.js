import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  const { email, name, password } = req.body;

  const [status, data] = await createUserService(email, name, password);

  return res.status(status).json(data);
};

export default createUserController;
