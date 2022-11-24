import createSessionService from "../services/createSession.service";

const createSessionController = (req, res) => {
  const { email, password } = req.body;

  const [status, data] = createSessionService(email, password);

  return res.status(status).json(data);
};

export default createSessionController;
