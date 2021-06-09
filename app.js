const express = require('express');
const app = express();
const pageRouter = require('./routes/pageRoutes');
//templat engine
app.set('view engine', 'ejs');

//MiddleWares
app.use(express.static('public'));

//Routes
app.use('/', pageRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
