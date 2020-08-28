const Course = require('../models/Courses');

class CourseController {

    //  [GET] /:slug
    show(req, res, next) {
        
        Course.findOne({slug: req.params.slug})
            .then(course => {
                course = course ? course.toObject() : course;
                res.render('./courses/show', { course });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('./courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = 'https://img.youtube.com/vi/nB6cJh_bb1U/sddefault.jpg';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

}

module.exports = new CourseController;
