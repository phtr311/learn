const Course = require('../models/Courses');
// const fileTest = require('./test.json');

// var fs = require("fs")

// function readJsonFileSync(filepath, encoding){

//     if (typeof (encoding) == 'undefined'){
//         encoding = 'utf8';
//     }
//     var file = fs.readFileSync(filepath, encoding);
//     return JSON.parse(file);
// }

// function getConfig(file){

//     var filepath = __dirname + '/' + file;
//     return readJsonFileSync(filepath);
// }

//assume that config.json is in application root

// const json = getConfig('./test.json');

class TestController {
    test(req,res,next){
        // res.send(json['a']);
        // json.name = 'hello';
        // json.des = 'hello';
        // json.videoid = 'hello';
        // const course = new Course(json);
        // res.send(course);
        // course.save()
        //     .then(() => res.redirect('/me/courses'))
        //     .catch(error => {
        //         console.log('error');
        //     });
    }

    done(req,res,next) {
        res.send('done!');
    }
}

module.exports = new TestController;
