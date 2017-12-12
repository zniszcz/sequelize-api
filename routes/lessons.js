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
    return Levels
        .create({
            level: req.body.level,
            lessonId: req.params.id,
        })
        .then(level => res.status(201).send(level))
        .catch(error => res.status(400).send(error));
});

module.exports = router;
