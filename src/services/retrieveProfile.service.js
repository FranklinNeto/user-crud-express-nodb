import users from "../database";

const retrieveProfileService = (idProfile) => {
  const profile = users.filter((user) => user.uuid === idProfile);

  if (!profile) {
    return [404, { message: "user not found" }];
  }

  const { password, ...profileWithoutPassword } = profile[0];

  return [200, profileWithoutPassword];
};

export default retrieveProfileService;
