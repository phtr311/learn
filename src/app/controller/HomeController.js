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

        // res.render('home');
        // Course.find({}, function (err, Courses) {
        //     if (!err) {
        //         res.json(Courses);
        //     }
        //     else {
        //         next(err);
        //     }
        // });
    }
}

module.exports = new HomeController;
