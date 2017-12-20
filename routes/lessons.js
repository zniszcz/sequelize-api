const router = require('express').Router();

const Lesson = require('../models').Lesson;
const Levels = require('../models').LevelsAssociation;

router.get('/', function(req, res) {
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
});

router.post('/', function(req, res) {
    return Lesson
        .create({
            title: req.body.title,
        })
        .then(lesson => res.status(201).send(lesson))
        .catch(error => res.status(400).send(error));
});

router.delete('/:id', function(req, res) {
    return Lesson.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

router.put('/:id/level', function(req, res) {
    const levels = req.body.levels || [];

    if (!levels.length) {
        return Levels
            .destroy({
                where: {
                    lessonId: req.params.id
                }
            })
            .then((data) => {
                res.status(201).send(data);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    } else {
        // TODO:
    }
});

router.post('/:id/level', function(req, res) {
    const createLevel = Levels
        .create({
            level: req.body.level,
            lessonId: req.params.id,
            x: req.body.x || 0,
            y: req.body.y || 0,
        });
    const findLesson = Lesson
        .find({
          where: {
            id: req.params.id,
          }
        });

    findLesson.then((lesson) => {
          const newLvl = req.body.level;
          const transaction = (from, to) => {
            const result = {};

            if (Number.isInteger(from) && Number.isInteger(to)) {
              // Both range edges setted before
              if (newLvl < from) {
                result.from = newLvl;
              }

              if (newLvl > to) {
                result.to = newLvl;
              }
            } else if (Number.isInteger(from)) {
              result.to = newLvl;
            } else if (Number.isInteger(to)) {
              result.from = newLvl;
            } else {
              result.from = newLvl;
              result.to = newLvl;
            }

            return result;
          };

          const update = transaction(parseInt(lesson.from), parseInt(lesson.to));
          const updateLesson = Lesson
            .update(update, {
              where: { id: parseInt(req.params.id) }
            });

          Promise.all([
            createLevel,
            findLesson,
            updateLesson,
          ]).then((data) => {
              const model = data[1];
              if (update.from) {
                model.from = update.from;
              }
              if (update.to) {
                model.to = update.to;
              }
              res.status(201).send(model);
          })
          .catch((error) => {
            res.status(400).send(error);
          });
        })
        .catch((error) => {
          res.status(400).send(error);
        });
});

module.exports = router;
