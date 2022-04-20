"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const mongodb = require("mongodb");
const url = require("url");
const bodyParser = require("body-parser");
let MongoClient = mongodb.MongoClient;
//var Q = require('q');
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.mongoDBConnection = 'mongodb://dbAdmin/test@localhost:3000/classSample';
        this.dbConnection = null;
        this.expressApp = express();
        this.middleware();
        this.routes();
    }
    openDbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dbConnection == null) {
                try {
                    this.dbConnection = yield MongoClient.connect(this.mongoDBConnection);
                    console.log("Connected correctly to MongoDB server.");
                }
                catch (err) {
                    console.log("Unable to connect to MongodDB server");
                }
            }
        });
    }
    // Configure Express middleware.
    middleware() {
        return __awaiter(this, void 0, void 0, function* () {
            this.expressApp.use(bodyParser.json());
            this.expressApp.use(bodyParser.urlencoded({ extended: false }));
            yield this.openDbConnection();
        });
    }
    accessTransportation(res, payload, api) {
        return __awaiter(this, void 0, void 0, function* () {
            //    var deferred = Q.defer();
            console.log("db operation: " + api);
            if (this.dbConnection != null) {
                console.log("Using Connection");
                let carCollection = this.dbConnection.collection('carCollection2');
                let query = payload;
                if (api === "query") {
                    try {
                        let result = yield carCollection.find(query);
                        return result.toArray();
                    }
                    catch (err) {
                        console.log("error querying all results.");
                    }
                }
                else if (api === "insert") {
                    try {
                        console.log("inserting payload:" + JSON.stringify(payload));
                        let result = yield carCollection.insert(payload);
                        console.log(`Updated ${result.result.n} documents`);
                        return { "result": "document added" };
                    }
                    catch (err) {
                        console.error(`Something went wrong: ${err}`);
                        return { "result": "error inserting document" };
                    }
                }
                else if (api === "delete") {
                    try {
                        console.log("deleting payload:" + JSON.stringify(payload));
                        let result = yield carCollection.deleteOne(payload);
                        if (result.result.n == 0) {
                            res.statusCode = 400;
                            return { "result": "record not found" };
                        }
                        else {
                            res.statusCode = 200;
                            return { "result": "deleted" };
                        }
                    }
                    catch (err) {
                        res.statusCode = 400;
                        return { "result": "error deleting" };
                    }
                }
            }
            else {
                console.log("Connection lost");
            }
        });
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/all', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const list = yield this.accessTransportation(res, {}, "query");
            res.send(list);
        }));
        router.post('/add', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let bodyRequest = req.body;
            console.log("payload in body:" + bodyRequest);
            const result = yield this.accessTransportation(res, bodyRequest, "insert");
            res.send(result);
        }));
        router.delete('/remove', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let bodyRequest = req.body;
            const result = yield this.accessTransportation(res, bodyRequest, "delete");
            res.send(result);
        }));
        router.get('/search', (req, res) => __awaiter(this, void 0, void 0, function* () {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            const list = yield this.accessTransportation(res, { speed: query.var1 }, "query");
            res.send(list);
        }));
        //col1.find({"speed": {$gte: "150"}})
        router.get('/search2', (req, res) => __awaiter(this, void 0, void 0, function* () {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            const list = this.accessTransportation(res, { speed: { $gte: query.var1 } }, "query");
            res.send(list);
        }));
        router.get('/vehicle/:vname', (req, res) => {
            var vname = req.params.vname;
            console.log('Query for vehicle name: ' + vname);
            this.accessTransportation(res, { vehicle: vname }, "query").then((list) => {
                res.send(list);
            });
        });
        router.param('vname', (req, res, next, value) => {
            console.log('The param value is: ' + value);
            next();
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    }
}
exports.App = App;
