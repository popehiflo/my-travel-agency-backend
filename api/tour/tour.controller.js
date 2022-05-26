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

async function handlerOneTour(req, res) {
  try {
    const tour = await TourModel.findById(req.params.id);
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerOneTourBySlug(req, res) {
  try {
    const tour = await TourModel.findOne({ slug: req.params.slug });
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerCreateTour(req, res) {
  const newTour = new TourModel(req.body);

  try {
    const tour = await newTour.save();
    res.status(201).json(tour);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerUpdateTour(req, res) {
  try {
    const updatedTour = await TourModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTour);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerDeleteTour(req, res) {
  try {
    await TourModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Tour has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerAllTours,
  handlerOneTour,
  handlerOneTourBySlug,
  handlerCreateTour,
  handlerUpdateTour,
  handlerDeleteTour,
};
