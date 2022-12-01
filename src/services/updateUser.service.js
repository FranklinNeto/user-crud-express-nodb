import users from "../database";

const updateUserService = (index, updatedData) => {
  users[index] = { ...users[index], ...updatedData, updatedOn: new Date() };

  const { password, ...data } = users[index];

  return [200, data];
};

export default updateUserService;
