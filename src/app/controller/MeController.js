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

        // [GET] /me/trash/courses
        trashCourses(req, res,next) {
            Course.findDeleted({})
            .then(courses => {
                courses = courses.map(course => {
                    return course ? course.toObject() : course;
                })
                res.render('me/trash-Courses', {courses});
            })
            .catch(next);
        }
}

module.exports = new MeController;
