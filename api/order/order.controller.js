const OrderModel = require('./order.model');

// Get user orders
async function handlerGetUserOrders(req, res) {
  try {
    const orders = await OrderModel.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerCreateOrder(req, res) {
  const newOrder = new OrderModel(req.body);

  try {
    const order = await newOrder.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerUpdateOrder(req, res) {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function handlerDeleteOrder(req, res) {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  handlerGetUserOrders,
  handlerCreateOrder,
  handlerUpdateOrder,
  handlerDeleteOrder,
};