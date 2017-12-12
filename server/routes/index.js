const lessonsController = require('../controllers').lessons;
const levelsController = require('../controllers').levels;

const Lesson = require('../models').Lesson;
const Levels = require('../models').LevelsAssociation;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: "Welcome"
  }));

  app.get('/api/lessons', lessonsController.list);
  app.post('/api/lessons', lessonsController.create);

  app.post('/api/lessons/:id/level', levelsController.create);

  app.get('/api/levels', function (req, res){
    return Levels
      .findAll({
        attributes: ['level', Levels.sequelize.col('level')],
        group: ['LevelsAssociation.level']
      })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  });

  app.get('/api/levels/:id', function(req, res) {
    return Levels
      .findAll({
        where: {
          level: req.params.id,
        },
        include: {
          model: Lesson,
        }
      })
      .then((data) => {
        const lessons = [];
        data.forEach(level => {
          lessons.push(level.Lesson);
        });
        res.status(201).send({
          level: req.params.id,
          lessons: lessons,
        });
      })
      .catch(error => {
        res.status(400).send(error);
      });
  });
};
