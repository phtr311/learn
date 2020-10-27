const homeRouter = require('./home')
const coursesRouter = require('./courses')
const meRouter = require('./me')
const testRouter = require('./test')

function route(app){
    app.use('/courses',coursesRouter);
    app.use('/me',meRouter);
    app.use('/test',testRouter);
    app.use('/', homeRouter);
}

module.exports = route;