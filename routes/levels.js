const _ = require('lodash');
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
            const lessons = {};
            const childrenMap = {};

            const mapLesson = (level) => {
              return {
                id: level.lessonId,
                x: level.x,
                y: level.y,
                title: level.Lesson.title,
                from: level.Lesson.from,
                to: level.Lesson.to,
                bgColor: level.Lesson.bgColor,
                createdAt: level.Lesson.createdAt,
                updatedAt: level.Lesson.updatedAt,
                parent: level.Lesson.parent,
                children: []
              };
            };

            data.forEach(level => {
              if (level.Lesson.parent === null) {
                lessons[level.lessonId] = mapLesson(level);
              } else {
                if (childrenMap[level.parent]) {
                  childrenMap[level.Lesson.parent]
                    .children
                    .push(mapLesson(level));
                } else {
                  childrenMap[level.Lesson.parent] = {
                    children: [
                      mapLesson(level),
                    ]
                  };
                }
              }
            });

            const result = _.merge(lessons, childrenMap);

            res.status(201).send({
                level: req.params.id,
                lessons: Object.values(result),
            });
        })
        .catch(error => {
            res.status(400).send(error);
        });
});

module.exports = router;
