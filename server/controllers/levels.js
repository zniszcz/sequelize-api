const Levels = require('../models').LevelsAssociation;
module.exports = {
  create(req, res) {
    console.log('-------------- dupa -----------');
    console.log({
      level: req.body.level,
      lessonId: req.params.id,
    })
    console.log('-------------- dupa -----------');

    return Levels
      .create({
        level: req.body.level,
        lessonId: req.params.id,
      })
      .then(level => res.status(201).send(level))
      .catch(error => res.status(400).send(error));
  }
};
