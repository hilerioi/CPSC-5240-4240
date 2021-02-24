"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var url = require("url");
var bodyParser = require("body-parser");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // router.get('/', (req, res, next) => {
        //   res.json({
        //     message: 'Hello World!'
        //   });
        // });
        router.get('/one', function (req, res, next) {
            res.send('request one');
        });
        router.post('/two', function (req, res, next) {
            var postBody = req.body;
            console.log("received post data:" + req.body);
            var oValue = JSON.parse(postBody);
            console.log('fName:' + oValue.fName);
            console.log('lName:' + oValue.lName);
            console.log('profession:' + oValue.profession);
            res.statusCode = 200;
            res.statusMessage = "Successful Post";
        });
        router.get('/add', function (req, res, next) {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            console.log('var1:' + query.var1);
            console.log('var2:' + query.var2);
            var value1 = parseInt(query.var1);
            var value2 = parseInt(query.var2);
            var sum = value1 + value2;
            //var sum = query.var1 + query.var2;
            var msg = 'addition of ' + query.var1 + ' plus ' + query.var2 + ' equals ' + sum;
            console.log(msg);
            res.send(msg);
        });
        router.get('/add2/:var1/:var2', function (req, res, next) {
            var value1 = parseInt(req.params.var1);
            var value2 = parseInt(req.params.var2);
            var sum = value1 + value2;
            //var sum = query.var1 + query.var2;
            var msg = 'addition of ' + value1 + ' plus ' + value2 + ' equals ' + sum;
            console.log(msg);
            res.send(msg);
        });
        var fname2;
        router.get('/name/:fname', function (req, res, next) {
            var name;
            console.log(':fname = ' + req.params.fname);
            if (req.params.fname === 'israelh') {
                name = fname2 + ' hilerio';
            }
            else {
                name = fname2 + ' world';
            }
            console.log("Your name is: " + name);
            res.send("Your name is: " + name);
        });
        router.param('fname', function (req, res, next, value) {
            console.log('The param value is: ' + value);
            fname2 = value + "-ABCD";
            console.log('fname2:' + fname2);
            next();
        });
        this.express.use('/', router);
        this.express.use('/data', express.static(__dirname + '/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
