var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');

var morgan = require('morgan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));



// var routes = require('./routes/executive_summary_light');
// routes(app);

// var user = require("../../routes/user");
// user(app);

app.use('/auth',require('./middleware'));

// var auth = require("./routes/auth");
// auth(app);


app.listen(port);
console.log('Server Running By Port: ' + port);


