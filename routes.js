/**
 * Main application routes
 */
const user = require('./api/user');
const tour = require('./api/tour');
const order = require('./api/order');
const backpack = require('./api/backpack');

function routes(app) {
  // API Routes
  app.use('/api/users', user);
  app.use('/api/tours', tour);
  app.use('/api/orders', order);
  app.use('/api/backpacks', backpack);
}

module.exports = routes;
