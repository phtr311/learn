const Course = require('../models/Courses');

class HomeController {

    //  [GET] /
    index(req, res,next) {
        Course.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
    }
}

module.exports = new HomeController;
