const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('index.html');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
