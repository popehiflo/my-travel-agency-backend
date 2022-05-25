const { Router } = require('express');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../../auth/auth.local.token');
const { 
  handlerAllBackpacks,
  handlerOneBackpack,
  handlerCreateBackpack,
  handlerUpdateBackpack,
  handlerDeleteBackpack
} = require('./backpack.controller');

const router = Router();

router.get('/', verifyTokenAndAdmin, handlerAllBackpacks);
router.get('/:userId', verifyTokenAndAuthorization, handlerOneBackpack);
router.post('/', verifyToken, handlerCreateBackpack);
router.put('/:id', verifyTokenAndAuthorization, handlerUpdateBackpack);
router.delete('/:id', verifyTokenAndAuthorization, handlerDeleteBackpack);

module.exports = router;