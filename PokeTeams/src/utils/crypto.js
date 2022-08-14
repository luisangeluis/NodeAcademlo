const bcrypt = require('bcrypt');

const hashPassword =(plainPassword)=>{
  return bcrypt.hashSync(plainPassword,10);
}

module.exports={
  hashPassword
}