const { Router } = require('express');
const { verifyTokenAndAdmin } = require('../../auth/auth.local.token');
const { 
  handlerAllTours,
  handlerOneTour,
  handlerCreateTour,
  handlerUpdateTour,
  handlerDeleteTour
} = require('./tour.controller');

const router = Router();

router.get('/', handlerAllTours);
router.get('/:id', handlerOneTour);
router.post('/', verifyTokenAndAdmin, handlerCreateTour);
router.put('/:id', verifyTokenAndAdmin, handlerUpdateTour);
router.delete('/:id', verifyTokenAndAdmin, handlerDeleteTour);

module.exports = router;
