const Course = require('../models/Courses');

class MeController {

    // [GET] /me/courses
        show(req, res,next) {
            Course.find({})
                .then(courses => {
                    courses = courses.map(course => {
                        return course ? course.toObject() : course;
                    })
                    res.render('me/courses', {courses});
                })
                .catch(next);
        }
}

module.exports = new MeController;
