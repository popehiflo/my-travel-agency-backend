const { Router } = require('express');
const { 
  handlerSignUpUser,
  handlerSignInUser,
} = require('./local.controller');

const router = Router();

router.post('/signup', handlerSignUpUser);
router.post('/signin', handlerSignInUser);

module.exports = router;
