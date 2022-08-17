const uuid = require('uuid');
const { hashPassword } = require('../utils/crypt');

const userDB = [];

const getAllUsers = () => {
  return userDB;
  //select * from users;
}

const getUserById = (id) => {
  const data = userDB.filter(item => item.id === id);
  return data.length>0 ? data[0] : false;
  
  //Select * from users where id=:${id};
}

const createUser = (data) => {
  const newUser = {
    id: uuid.v4(), //obligatorio
    first_name: data.first_name,//obligatorio
    last_name: data.last_name,//obligatorio
    email: data.email,//obligatorio y unico
    password: hashPassword(data.password),//obligatorio
    phone: data.phone ? data.phone : '',//unico
    birthday_date: data.birthday_date,//obligatorio
    rol: 'normal',//obligatorio y por defecto normal
    profile_image: data.profile_image ? data.profile_image : '',
    country: data.country,//obligatorio
    active: true,//obligatorio y por defecto true
    verified: false,//obligatorio y por defecto false
  }

  userDB.push(newUser);
  return newUser;
}

const editUser=(id,data)=>{
  const index = userDB.findIndex(user=>user.id === id);
  
  if(index !==-1){
    return userDB[index] ={
      id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hashPassword(data.password),
      phone: data.phone,
      birthday_date: data.birthday_date,
      rol: data.rol,
      profile_image: data.profile_image ? data.profile_image : '',
      country: data.country,
      active: data.active,
      verified: false,
    }
  }else{
    return createUser(data);
  }
}

const deleteUser=(id)=>{
  const index = userDB.findIndex(user=>user.id===id);
  
  if(index!==-1){
    userDB.splice(index,1);
    return true;
  }else{
    return false;
  }
  
}

const getUserByEmail=(email)=>{
  const data = userDB.filter(item => item.email === email);
  return data.length>0 ? data[0] : false;
}

module.exports={
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
  getUserByEmail
}
