const chai = require('chai');
const { it, describe } = require('mocha');
const chaiHttp = require('chai-http');

const app = require('../../app').app;

chai.use(chaiHttp);

describe('Suite de test de integracion de usuarios', () => {
  it('Should return 204 when I delete my own user with my credentials', (done) => {
    chai.request(app)
      .delete('/api/v1/users/me')
      .set('Authorization', 'JWT')
      .end((err, res) => {
        chai.assert.equal(res.status, 204);
      })
      done();
  })

  it('Should return 200 when I get all users', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        chai.assert.equal(res.status, 200);
      })
      done();
  })
})