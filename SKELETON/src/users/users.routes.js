const router =require('express').Router();
const usersServices =require('./users.http');

router.route('/') //* /api/v1/users/
  .get(usersServices.getAll)
  .post(usersServices.register)

  exports.router =router;