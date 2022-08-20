//Dependencies
const uuid = require('uuid');
const { hashPassword } = require('../utils/crypto');
const userDB = [];

const createUser = (data) => {
  const newUser = {
    id: uuid.v4(),
    name: data.name,
    email: data.email,
    password: hashPassword(data.password),
  }
  userDB.push(newUser);
  return newUser
}

const getAllUsers = () => {
  return userDB
}

const getUserById = (id) => {
  const data = userDB.filter(user => user.id === id);
  return data;
}

const deleteUser = (id) => {
  const index = userDB.findIndex(user => user.id === id);
  userDB.splice(index, 1);

  return index !== -1;
}

const editUser = (id, data) => {
  const index = userDB.findIndex(user => user.id === id);

  if (index !== -1) {
    userDB[index] = {
      id,
      name: data.name,
      email: data.email,
      password:hashPassword( data.password)
    };
    return userDB[index]
  } else {
    return createUser(data)
  }
}

const getUserByEmail=(email)=>{

  const data =userDB.filter(user=>user.email ===email)
  return data.length ? data[0] : false;
}

module.exports={
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  editUser,
  getUserByEmail
}
