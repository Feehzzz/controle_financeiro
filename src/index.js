require('dotenv').config(__dirname)
const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'));
app.use(express.json())
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server online')
})