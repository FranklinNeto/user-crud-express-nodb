import createSessionService from "../services/createSession.service";

const createSessionController = async (req, res) => {
  const { email, password } = req.body;

  const [status, data] = await createSessionService(email, password);

  return res.status(status).json(data);
};

export default createSessionController;
