const OrderModel = require('./order.model');

async function handlerCreateOrder(req, res) {
  const newOrder = new OrderModel(req.body);

  try {
    const order = await newOrder.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerCreateOrder,
};