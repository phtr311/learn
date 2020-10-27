const express = require('express')
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
//  path: để chuyển vị trí default của thư mục views, đi kèm với câu lệnh ở dưới
var path = require('path');
const route = require('./routes/index');

// database
const db = require('./config/db/index');

const app = express()
const port = 3001

//  Middleware
//  xem trong bài POST METHOD
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));
// connect database
db.connect();

// template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b,
}
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // thay đổi vị trí mặc định của thư mục views

//  static field - sử dụng link đến static field, mặc định là thư mục public
app.use(express.static(path.join(__dirname, 'public')))

route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})