const router = require('express').Router();

const Lesson = require('../models').Lesson;
const Levels = require('../models').LevelsAssociation;

router.get('/', function(req, res) {
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

router.get('/:id', function(req, res) {
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
                console.log('-----', JSON.stringify(level));

                // lessons.push(level);
                lessons.push({
                  id: level.lessonId,
                  x: level.x,
                  y: level.y,
                  title: level.Lesson.title,
                  from: level.Lesson.from,
                  to: level.Lesson.to,
                  bgColor: level.Lesson.bgColor,
                  createdAt: level.Lesson.createdAt,
                  updatedAt: level.Lesson.updatedAt,
                });
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

module.exports = router;
