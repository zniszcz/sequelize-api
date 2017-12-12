const Levels = require('../models').LevelsAssociation;
module.exports = {
  create(req, res) {
    console.log("Level: "+req.body.level+" Lesson: "+ req.params.id);
    return Levels
      .create({
        level: req.body.level,
        lessonId: req.params.id,
      })
      .then(level => res.status(201).send(level))
      .catch(error => res.status(400).send(error));
  }
};
