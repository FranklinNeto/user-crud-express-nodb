import createUserService from "../services/createUser.service";

const createUserController = (req, res) => {
  try {
    const { email, name } = req.body;

    const newUser = createUserService(email, name);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;
