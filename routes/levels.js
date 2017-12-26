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
    'use strict';
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
            const flatStructure = {};

            const lessons = [];
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
                children: [],
                childrenRefs: [],
              };
            };

            data.forEach(level => {
              const lesson = mapLesson(level);
              flatStructure[lesson.id] = lesson;
              if (lesson.parent !== null) {
                flatStructure[lesson.parent].childrenRefs.push(lesson.id);
              }
            });

            const getEmptyChildrenRefs = () => {
              let refsCount = 0;
              Object.values(flatStructure).forEach((lesson) => {
                if (!lesson.childrenRefs.length) {
                  refsCount++;
                }
              });

              return refsCount;
            };

            const deleteEmptyChildrenRefs = () => {
              Object.values(flatStructure).forEach((lesson) => {
                if (lesson.childrenRefs.length === 0) {
                  if (flatStructure[lesson.parent]) {
                    flatStructure[lesson.parent].children.push(lesson);
                    flatStructure[lesson.parent].childrenRefs = _
                      .remove(flatStructure[lesson.parent].childrenRefs, [lesson.id]);
                  } else {
                    lessons.push(lesson);
                  }
                  delete flatStructure[lesson.id];
                }
              });
            };

            while (getEmptyChildrenRefs()) {
              deleteEmptyChildrenRefs();
            }

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
