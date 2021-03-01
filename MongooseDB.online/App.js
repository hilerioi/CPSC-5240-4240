"use strict";
exports.__esModule = true;
exports.App = void 0;
//import * as path from 'path';
var express = require("express");
var logger = require("morgan");
//import * as mongodb from 'mongodb';
//import * as url from 'url';
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var ListModel_1 = require("./model/ListModel");
var TaskModel_1 = require("./model/TaskModel");
//import {DataAccess} from './DataAccess';
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        this.Lists = new ListModel_1.ListModel();
        this.Tasks = new TaskModel_1.TaskModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/app/list/:listId/count', function (req, res) {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            _this.Tasks.retrieveTasksCount(res, { listId: id });
        });
        router.post('/app/list/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            //jsonObj.listId = this.idGenerator;
            _this.Lists.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/list/:listId', function (req, res) {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            _this.Tasks.retrieveTasksDetails(res, { listId: id });
        });
        router.get('/app/list/', function (req, res) {
            console.log('Query All list');
            _this.Lists.retrieveAllLists(res);
        });
        router.get('/app/listcount', function (req, res) {
            console.log('Query the number of list elements in db');
            _this.Lists.retrieveListCount(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/dist/todoApp'));
        //    this.expressApp.use('/', express.static(__dirname+'/pages'));
    };
    return App;
}());
exports.App = App;
