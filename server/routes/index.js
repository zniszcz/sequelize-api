const lessonsController = require('../controllers').lessons;
const levelsController = require('../controllers').levels;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome"
  }));

  app.get('/api/lessons', lessonsController.list);
  app.post('/api/lessons', lessonsController.create);

  app.post('/api/lessons/:id/level', levelsController.create);
};
