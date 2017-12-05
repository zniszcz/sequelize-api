const lessonsController = require('../controllers').lessons;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome"
  }));

  app.post('/api/lessons', lessonsController.create);
};
