const Course = require('../models/Courses');

class TestController {
    test(req,res,next){
        res.render('test');
    }
}

module.exports = new TestController;
