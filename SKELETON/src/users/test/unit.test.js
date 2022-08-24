const { assert } = require("chai");
const { it } = require("mocha")
//Controllers
const usersControllers = require('../users.controllers');

describe('Test unitario de mis usuarios', () => {
  it('Should return new user when I sent correct data', (done) => {
    const body = {
      first_name: 'Usuario de test',
      last_name: 'Tester',
      email: 'email@email.com',
      password: '12345',
      phone: '1234567890',
      birthday_date: '22/10/2020',
      country: 'mexico'
    }
    const data = usersControllers.createUser(body);
    assert.equal(data.first_name,body.first_name);
    assert.equal(data.rol,'normal');
    assert.notEqual(data.password,body.password);
    done();
  })
})

// const sum = (a,b) => {
//   return a+b;
// }
// describe('Test unitario de mis usuarios',()=>{
//   it('Deberia retornar 8',()=>{
//       const miFuncionEjecutada =sum(6,2);
//       assert.equal(miFuncionEjecutada,8,'Ups no es un 8');
//   })
//   it('Deberia retornar 25',()=>{
//     const miFuncionEjecutada =sum(10,15);
//     assert.equal(miFuncionEjecutada,25,'Ups no es un 25');
// })
// })

