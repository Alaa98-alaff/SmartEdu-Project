const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoute');

const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

//templat engine
app.set('view engine', 'ejs');

//MiddleWares
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
