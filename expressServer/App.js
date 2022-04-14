"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
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
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/one', function (req, res, next) {
            res.send('request one');
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
            console.log('var1:' + req.params.var1);
            console.log('var2:' + req.params.var2);
            var value1 = parseInt(req.params.var1);
            var value2 = parseInt(req.params.var2);
            var sum = value1 + value2;
            //var sum = query.var1 + query.var2;
            var msg = 'addition of ' + value1 + ' plus ' + value2 + ' equals ' + sum;
            console.log(msg);
            res.send(msg);
        });
        router.post('/add', function (req, res, next) {
            var payload = req.body;
            console.log('var1:' + payload.var1);
            console.log('var2:' + payload.var2);
            var value1 = parseInt(payload.var1);
            var value2 = parseInt(payload.var2);
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
            console.log(name);
            res.send("Your name is: " + name);
        });
        router.param('fname', function (req, res, next, value) {
            console.log('The param value is: ' + value);
            fname2 = value + "-ABC";
            next();
        });
        this.express.use('/', router);
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
