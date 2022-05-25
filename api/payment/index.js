const { Router } = require('express');

const {
  handlerPayStripe,
} = require('./payment.controller');

const router = Router();

router.post('/pay-stripe', handlerPayStripe);

module.exports = router;
