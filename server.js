const express = require('express');
const app = express();
const path = require('path');
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Routes to apiRoutes.js and htmlRoutes.js
// app.use('/api', apiRoute);
app.use('/', htmlRoute);
// app.use('/notes', htmlRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));