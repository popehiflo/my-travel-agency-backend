/**
 * Main application routes
 */

function routes(app) {
  // API Routes
  app.use('/api/users', (req, res) => {
    res.json('Hi!! ✌ response to users GET /');
  });
}

module.exports = routes;
