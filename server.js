const express = require('express'), app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path')
const routes = require('./back-end/config/routes');
const {Client} = require('pg')
require('dotenv').config();

const PORT = process.env.PORT;

// const client = new Client({ connectionString: process.env.DATABASE_URL });
// client.connect( (error) => {
// 	if (error) { console.log('error yo: ', error) } else { console.log('connected to db') }
// });


// helmet middleware for security
app.use(helmet());
app.use(cookieParser())
// body-parser functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname +  '/front-end/build')));

app.use('/', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front-end/build/index.html'));
});

app.listen(PORT, () => console.log('Gettin Schwifty On ' + PORT));