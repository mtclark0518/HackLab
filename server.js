const express = require('express'), app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path')
const routes = require('./back-end/config/routes');
require('dotenv').config();

// helmet middleware for security
app.use(helmet());
// cookie-parser for 3rd party cookies
app.use(cookieParser())
// body-parser functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(express.static(path.join(__dirname +  '/front-end/build')));
// use our routes
app.use('/', routes);

// any wonky route requests and we show the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front-end/build/index.html'));
});
// fire up the server
app.listen( process.env.PORT, () => { 
    console.log( 'Gettin Schwifty On ' + process.env.PORT );
});