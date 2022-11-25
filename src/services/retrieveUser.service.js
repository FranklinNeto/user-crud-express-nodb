import users from "../database";

const retrieveUserService = (index) => {
  return [200, users[index]];
};

export default retrieveUserService;
