const TourModel = require('./tour.model');

async function handlerCreateTour(req, res) {
  const newTour = new TourModel(req.body);

  try {
    const tour = await newTour.save();
    res.status(201).json(tour);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerCreateTour,
};