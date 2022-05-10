const Order = require('../models/order');
const BadRequestError = require('../errors/bad-request-error');
const NotFoundError = require('../errors/not-found-error');
const { errorMessages } = require('../utils/constants');
const { initialOrders } = require('../utils/fixtures');

// adding demo orders
const createInitialOrders = async () => {
  const promises = initialOrders.map((item) => Order.create({ ...item, time: new Date() }));

  return Promise.all(promises);
};

module.exports.getAllOrders = async (req, res, next) => {
  try {
    let allOrders = await Order.find({}, ['orderId', 'name', 'status', 'time']);

    if (allOrders.length === 0) {
      allOrders = await createInitialOrders();
    }

    res.send(allOrders);
  } catch (error) {
    next(error);
  }
};

module.exports.createOrder = async (req, res, next) => {
  const { name, phone, comment } = req.body;

  try {
    const order = await Order.create({
      status: 'OPEN',
      name,
      phone,
      comment,
      time: new Date(),
    });

    res.send(order);
  } catch (error) {
    let err = error;

    if (error.name === 'ValidationError') {
      err = new BadRequestError(errorMessages.invalidCreateOrderData);
    }

    next(err);
  }
};

module.exports.updateOrderStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      {
        new: true,
        runValidators: true,
      },
    ).orFail(() => new NotFoundError(errorMessages.orderNotFound));

    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }

  return null;
};

module.exports.getOrderById = async (req, res, next) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOne({ orderId })
      .orFail(() => new NotFoundError(errorMessages.orderNotFound));

    res.send(order);
  } catch (error) {
    next(error);
  }

  return null;
};
