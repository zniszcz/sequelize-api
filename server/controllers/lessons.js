const Lesson = require('../models').Lesson;
const Levels = require('../models').LevelsAssociation;

module.exports = {
  create(req, res) {
    return Lesson
      .create({
        title: req.body.title,
      })
      .then(lesson => res.status(201).send(lesson))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Lesson
      .findAll({
        include: [{
          model: Levels,
        }]
      })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch(error => {
        res.status(400).send(error);
      });
  }
};
