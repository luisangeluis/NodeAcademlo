const { getUserByEmail } = require('../users/users.controllers');
const { comparePassword } = require('../utils/crypto')

const login = (email, password) => {
  const user = getUserByEmail(email);

  if (user) {
    const verifyPassword = comparePassword(password, user.password);
    if (verifyPassword) {
      return user;
    }
  }
  return false;
}

exports.login = login