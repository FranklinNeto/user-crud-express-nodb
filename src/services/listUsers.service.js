import users from "../database";

const listUsersService = () => {
  return [200, users];
};

export default listUsersService;
