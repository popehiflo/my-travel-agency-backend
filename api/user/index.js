const { Router } = require('express');
const { 
  handlerAllUser,
  handlerOneUser,
  handlerCreateUser,
  handlerUpdateUser,
  handlerDeleteUser
} = require('./user.controller');

const router = Router();

router.get('/', handlerAllUser);
router.get('/:id', handlerOneUser);
router.post('/', handlerCreateUser);
router.put('/:id', handlerUpdateUser);
router.delete('/:id', handlerDeleteUser);

module.exports = router;
