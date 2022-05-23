const { Router } = require('express');
const { handleAllUser } = require('./user.controller');

const router = Router();

router.get('/', handleAllUser);

module.exports = router;
