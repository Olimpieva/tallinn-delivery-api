const routerMovies = require('express').Router();

const {
  getAllOrders,
  createOrder,
  getOrderById,
} = require('../controllers/orders');

routerMovies.get('/', getAllOrders);

routerMovies.post('/', createOrder);

routerMovies.get('/:orderId', getOrderById);

module.exports = routerMovies;
