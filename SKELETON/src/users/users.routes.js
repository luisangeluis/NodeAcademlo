const router =require('express').Router();
const usersServices =require('./users.http');

router.route('/') //* /api/v1/users/
  .get(usersServices.getAll)
  .post(usersServices.register)

router.route('/:id')
  .get(usersServices.getById)
  .delete(usersServices.remove)
  .put(usersServices.edit)

  exports.router =router;