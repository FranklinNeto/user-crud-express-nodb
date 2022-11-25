import users from "../database";

const deleteUserService = (index) => {
  users.splice(index, 1);

  return [204, {}];
};
export default deleteUserService;
