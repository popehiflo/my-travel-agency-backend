const TourModel = require('./tour.model');

async function handlerAllTours(req, res) {
  const queryNews = req.query.new;
  const queryCategory = req.query.category;
  try {
    let tours;

    if (queryNews) {
      tours = await TourModel.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryCategory) {
      tours = await TourModel.find({
        categories: {
          $in: [queryCategory],
        },
      });
    } else {
      tours = await TourModel.find();
    }

    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json(err);
  }
};

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
  handlerAllTours,
  handlerCreateTour,
};