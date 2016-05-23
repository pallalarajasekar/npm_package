/**
 * Created by pallali on 23/5/16.
 */
/**
 * Created by pallali on 24/3/16.
 */
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/database';


app.get('/', function(req, res){
    res.render("index")
})

app.get('/fv', function(req, res){
    res.render("formvalidate")
})
app.get('/de', function(req, res){
    res.render("directiveExample")
})
app.get('/cd', function(req, res){
    res.render("customdirective")
})

app.get('/aa', function(req, res){
    res.render("angularajax")
})

app.get('/data', function(req, res){
    res.render("data")
})


app.get('/js/data', function(req, res){
    var data = [
        {
            "Name": "Mahesh Parashar",
            "RollNo": 101,
            "Percentage": "80%"
        },

        {
            "Name": "Dinkar Kad",
            "RollNo": 201,
            "Percentage": "70%"
        },

        {
            "Name": "Robert",
            "RollNo": 191,
            "Percentage": "75%"
        },

        {
            "Name": "Julian Joe",
            "RollNo": 111,
            "Percentage": "77%"
        }
    ];
    res.send(data);
})

app.get('/param',function(req,res){
    console.log("welcome")
    data = {
        fname:req.query.fname,
        lname:req.query.lname
    };
    console.log(data);
    res.send([data])
})

app.post('/postreq',function(req,res){
    console.log("welcome")
    console.log(req);
    data = {
        fname:req.body.fname,
        lname:req.body.lname
    };
    console.log(data);
    res.send([data])
})

app.get('/welcome', function(req, res){
    res.render("welcome")
})

app.get('/ahttp', function(req, res){
    res.render("angularhttp")
})

