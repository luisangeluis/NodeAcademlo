const {getUserByEmail} =require('../users/users.controllers');
const {comparePassword}=require('../utils/crypto')

const login =(email,password)=>{
  const user = getUserByEmail(email);

  if(user){
    const verifyPassword =comparePassword(passwor,user.password);
    if(verifyPassword){
      return user;
    }
  }
  return false;
}