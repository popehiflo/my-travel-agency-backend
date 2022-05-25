const { Router } = require('express');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../../auth/auth.local.token');
const { 
  handlerAllOrders,
  handlerGetUserOrders,
  handlerCreateOrder,
  handlerUpdateOrder,
  handlerDeleteOrder,
  handlerOrderIncome,
} = require('./order.controller');

const router = Router();

router.get('/', verifyTokenAndAdmin,handlerAllOrders);
router.get('/income', verifyTokenAndAdmin, handlerOrderIncome);
router.get('/:userId', verifyTokenAndAuthorization, handlerGetUserOrders);
router.post('/', verifyToken, handlerCreateOrder);
router.put('/:id', verifyTokenAndAdmin, handlerUpdateOrder);
router.delete('/:id', verifyTokenAndAdmin, handlerDeleteOrder);

module.exports = router;
