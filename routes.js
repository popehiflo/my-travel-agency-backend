/**
 * Main application routes
 */
const user = require('./api/user');

function routes(app) {
  // API Routes
  app.use('/api/users', user);
}

module.exports = routes;
