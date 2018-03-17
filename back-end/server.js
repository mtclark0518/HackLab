const express = require('express'), app = express();
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./config/routes');
const {Client} = require('pg')
const PORT = process.env.PORT || 8080

const client = new Client({ connectionString: process.env.DATABASE_URL });
client.connect( (error) => {
	if (error) { console.log('error yo: ', error) } else { console.log('connected to db') }
});

//body-parser functionality
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname +  '../front-end/public')));
app.use('/', routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../front-end/public/index.html'));
});

app.listen(PORT, () => console.log('Gettin Schwifty On ' + PORT));