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
            .then(() => res.redirect('/me/courses'))
            .catch(error => {

            });
    }

    //  [GET] /courses/:id/edit
    edit(req, res, next) {

        Course.findById(req.params.id)
            .then(course => {
                course = course ? course.toObject() : course;
                res.render('./courses/edit', { course })
            })
            .catch(next);
    }

    //  [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/courses'))
            .catch(next);
    }

    //  [DELETE] /course/:id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //  [DELETE] /course/:id/force
    forceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }

    //  [PATCH] /course/:id/restore
    restore(req, res, next){
        Course.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
}

module.exports = new CourseController;
