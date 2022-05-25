const { Router } = require('express');
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require('../../auth/auth.local.token');
const { 
  handlerAllUser,
  handlerOneUser,
  handlerCreateUser,
  handlerUpdateUser,
  handlerDeleteUser,
  handlerStatsUser
} = require('./user.controller');

const router = Router();

router.get('/', verifyTokenAndAdmin, handlerAllUser);
router.get('/stats', verifyTokenAndAdmin, handlerStatsUser);
router.get('/:id', verifyTokenAndAdmin, handlerOneUser);
router.post('/', handlerCreateUser);
router.put('/:id', verifyTokenAndAuthorization, handlerUpdateUser);
router.delete('/:id', verifyTokenAndAuthorization, handlerDeleteUser);

module.exports = router;
