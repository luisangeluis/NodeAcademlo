const userDB = [
  {
    
  }
];
/*
    {
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: ""
    }
*/
const getAllUsers = () => {
  return userDB;
};

const getUserById = (id) => {
  const filteredDB = userDB.filter((user) => user.id === id);
  return filteredDB[0];
};

const createUser = (userObj) => {
  if (userDB.length === 0) {
    const newUser = {
      id: 1,
      name: userObj.name,
      age: userObj.age,
      email: userObj.email,
      country: userObj.country,
      phone: userObj.phone,
    };
    userDB.push(newUser);
    return newUser;
  }
  const newUser = {
    id: userDB[userDB.length - 1].id + 1,
    name: userObj.name,
    age: userObj.age,
    email: userObj.email,
    country: userObj.country,
    phone: userObj.phone,
  };
  userDB.push(newUser)
  return newUser
};

const deleteUser =(id)=>{
  const index = userDB.findIndex((item) => item.id === id);
  if (index !== -1) {
    userDB.splice(index, 1);
    return true;
  
  }
  return false;

}

const updateUser =(id,userObj)=>{s
  const index = userDB.findIndex((item) => item.id === id);
  
  if (index !== -1) {
    userDB[index].id =id;
    userDB[index].name =userObj.name;
    userDB[index].age =userObj.age;
    userDB[index].email =userObj.email;
    userDB[index].country =userObj.country;
    userDB[index].phone =userObj.phone;
    return userDB[index];
  }
  return false;

} 

module.exports={
  getAllUsers,
  getUserById,
  createUser,
}
