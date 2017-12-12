const Lesson = require('../models').Lesson;
const Levels = require('../models').LevelsAssociation;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: "Welcome"
    }));

    app.use('/api/lessons', require('./lessons'));
    app.use('/api/levels', require('./levels'));
};
