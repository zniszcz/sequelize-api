const Lesson = require('../models').Lesson;

module.exports = {
  create(req, res) {
    return Lesson
      .create({
        title: req.body.title,
      })
      .then(lesson => res.status(201).send(lesson))
      .catch(error => res.status(400).send(error));
  }
};
