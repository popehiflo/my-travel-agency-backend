const BackpackModel = require('./backpack.model');

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

module.exports = {
  handlerCreateBackpack,
  handlerUpdateBackpack,
};
