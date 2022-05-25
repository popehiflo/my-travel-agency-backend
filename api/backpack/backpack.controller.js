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

module.exports = {
  handlerCreateBackpack,
};
