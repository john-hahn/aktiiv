// Database connections
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/workoutdb"

// Load Node modules
var express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
var app = express();

// Initializing Express
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Body-parser config
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connecting variable db to database
var db;
MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    db = client.db('workoutdb');
    app.listen(8080);
    console.log('Listening on 8080');
});

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/home');
});
// Program Route
app.get('/program', function (req, res) {
    res.render('pages/program');
});
// Calendar Route
app.get('/calendar', function (req, res) {
    db.collection('workouts').find({}).toArray(function (err, result) {
        console.log('Workout Collection: ' + JSON.stringify(result));
        res.render('pages/calendar', {
            workoutdetails: result
        });
    });
});

// *** POST Routes ***
// Add Route
app.post('/add', function(req, res) {
    // Get details from the form
    var chestWorkout = req.body.chest;
    var backWorkout = req.body.back;
    var shouldersWorkout = req.body.shoulders;
    var bicepsWorkout = req.body.biceps;
    var tricepsWorkout = req.body.triceps;
    // Format workout details into JSON
    var workoutDays = {"chest": chestWorkout, 
                       "back": backWorkout, 
                       "shoulders": shouldersWorkout, 
                       "biceps": bicepsWorkout, 
                       "triceps": tricepsWorkout}
    // Add workout details to workout collection
    db.collection('workouts').insertOne(workoutDays, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.redirect('/');
    });
});