"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var url = require("url");
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.mongoDBConnection = 'mongodb://dbAdmin/test@localhost:3000/classSample';
        this.dbConnection = null;
        this.expressApp = express();
        this.middleware();
        this.openDbConnection();
        this.routes();
    }
    App.prototype.openDbConnection = function () {
        var _this = this;
        if (this.dbConnection == null) {
            MongoClient.connect(this.mongoDBConnection, function (err, dbConnection) {
                _this.dbConnection = dbConnection;
                console.log("Connected correctly to MongoDB server.");
            });
        }
    };
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.accessTransportation = function (res, query) {
        var deferred = Q.defer();
        console.log("query Transportation");
        if (this.dbConnection != null) {
            console.log("Using Connection");
            this.dbConnection.collection('carCollection', function (err, nCollection) {
                nCollection.find(query, function (err, cursor) {
                    cursor.toArray(function (err, itemArray) {
                        var list = "<h1>Request</h1>";
                        for (var i = 0; i < itemArray.length; i++) {
                            list += "<h3>" + itemArray[i].vehicle + " : " + itemArray[i].speed + "</h3>";
                        }
                        return deferred.resolve(list);
                    });
                });
            });
        }
        else {
            console.log("Connection lost");
        }
        return deferred.promise;
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/all', function (req, res) {
            _this.accessTransportation(res, {}).then(function (list) { res.send(list); });
        });
        router.get('/search', function (req, res) {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            _this.accessTransportation(res, { speed: query.var1 }).then(function (list) {
                res.send(list);
            });
        });
        router.get('/vehicle/:vname', function (req, res) {
            var vname = req.param('vname');
            console.log('Query for vehicle name: ' + vname);
            _this.accessTransportation(res, { vehicle: vname }).then(function (list) {
                res.send(list);
            });
        });
        router.param('vname', function (req, res, next, value) {
            console.log('The param value is: ' + value);
            next();
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
