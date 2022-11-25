import retrieveProfileService from "../services/retrieveProfile.service";

const retrieveProfileController = (req, res) => {
  const [status, data] = retrieveProfileService(req.user.id);

  return res.status(status).json(data);
};

export default retrieveProfileController;
