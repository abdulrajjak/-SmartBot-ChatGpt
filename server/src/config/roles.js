const allRoles = {
  user: ['updateProfile','getChatHistory','updateChat','createChat','createhistory','getHistory','productScan'],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
