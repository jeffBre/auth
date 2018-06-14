// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB setup
/
mongoose.connect('mongodb://localhost/auth');
// mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined')); //middleware (morgan - login framework)
app.use(cors()); // to use cross-origin requests to another domains
app.use(bodyParser.json({ type: '*/*' })); //middleware
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
