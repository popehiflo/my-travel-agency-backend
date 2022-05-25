const BackpackModel = require('./backpack.model');

async function handlerAllBackpacks(req, res) {
  try {
    const backpacks = await BackpackModel.find();
    res.status(200).json(backpacks);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerOneBackpack(req, res) {
  try {
    const backpack = await BackpackModel.findOne({ userId: req.params.userId });
    res.status(200).json(backpack);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerCreateBackpack(req, res) {
  const newBackpack = new BackpackModel(req.body);

  try {
    const backpack = await newBackpack.save();
    res.status(201).json(backpack);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerUpdateBackpack(req, res) {
  try {
    const updatedBackpack = await BackpackModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBackpack);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerDeleteBackpack(req, res) {
  try {
    await BackpackModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Backpack has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerAllBackpacks,
  handlerOneBackpack,
  handlerCreateBackpack,
  handlerUpdateBackpack,
  handlerDeleteBackpack,
};
