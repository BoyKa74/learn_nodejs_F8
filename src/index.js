const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars'); //thư viện dùng layout mặc định
var morgan = require('morgan');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' })); // Sử dụng `engine` thay vì `handlebars()`
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
