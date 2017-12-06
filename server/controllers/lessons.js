const Lesson = require('../models').Lesson;

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
      .all()
      .then(lessons => res.status(200).send(lessons))
      .then(error => res.status(400).send(error));
  }
};
