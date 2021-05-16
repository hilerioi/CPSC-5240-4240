"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');
var TechnicianModel_1 = require("./model/TechnicianModel");
var SalonModel_1 = require("./model/SalonModel");
//import {LanguageModel} from './model/LanguageModel';
var RegisteredUserModel_1 = require("./model/RegisteredUserModel");
//import {SkillModel} from './model/SkillModel';
var RatingModel_1 = require("./model/RatingModel");
//import {DataAccess} from './DataAccess';
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 102;
        this.Technicians = new TechnicianModel_1.TechnicianModel();
        //this.Languages = new LanguageModel();
        this.RegisteredUsers = new RegisteredUserModel_1.RegisteredUserModel();
        //this.Skills =new SkillModel();
        this.Ratings = new RatingModel_1.RatingModel();
        this.Salons = new SalonModel_1.SalonModel();
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
        //API endpoint for application
        //API endpoints for technician
        router.post('/app/technician/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            //jsonObj.listId = this.idGenerator;
            _this.Technicians.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/technician/:technicianId', function (req, res) {
            var id = req.params.technicianId;
            console.log('Query single technician with id: ' + id);
            _this.Technicians.retreiveTechniciansDetails(res, { technicianID: id });
        });
        router.get('/app/technician/', function (req, res) {
            console.log('Query All technicians');
            _this.Technicians.retreiveAllTechnicians(res);
        });
        router.get('/app/technicianCount', function (req, res) {
            console.log('Query the number of technician elements in db');
            _this.Technicians.retrieveTechnicianCount(res);
        });
        //API endpoints for salon
        router.post('/app/salon/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            //jsonObj.listId = this.idGenerator;
            _this.Salons.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/salon/', function (req, res) {
            console.log('Query All salons');
            _this.Salons.retreiveAllSalons(res);
        });
        router.get('/app/salon/:salonId', function (req, res) {
            var id = req.params.salonId;
            console.log('Query single salon with id: ' + id);
            _this.Salons.retreiveSalonDetails(res, { salonID: id });
        });
        router.get('/app/salonCount', function (req, res) {
            console.log('Query the number of salon elements in db');
            _this.Salons.retrieveSalonCount(res);
        });
        //API endpoints for registeredUser
        router.post('/app/registeredUser/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            //jsonObj.listId = this.idGenerator;
            _this.RegisteredUsers.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/registeredUser/', function (req, res) {
            console.log('Query All registered Users');
            _this.RegisteredUsers.retreiveAllRegisteredUsers(res);
        });
        router.get('/app/registeredUser/:registeredUserId', function (req, res) {
            var id = req.params.registeredUserId;
            console.log('Query single registered User with id: ' + id);
            _this.RegisteredUsers.retreiveRegisteredUsersDetails(res, { registeredUserID: id });
        });
        router.get('/app/registeredUserCount', function (req, res) {
            console.log('Query the number of registeredUser elements in db');
            _this.RegisteredUsers.retrieveAllRegisteredUserCount(res);
        });
        //API endpoints for skills ---> Not needed?
        // router.get('/app/skills/', (req, res) => {
        //     console.log('Query All skills');
        //     this.Technicians.retreiveAllSkills(res);
        // });
        //API endpoints for ratings 
        router.post('/app/rating/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            //jsonObj.listId = this.idGenerator;
            _this.Ratings.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/rating/', function (req, res) {
            console.log('Query All ratings');
            _this.Ratings.retreiveAllRatings(res);
        });
        router.get('/app/rating/:ratingId', function (req, res) {
            var id = req.params.ratingId;
            console.log('Query single rating with id: ' + id);
            _this.Ratings.retreiveRatingsDetails(res, { ratingID: id });
        });
        router.get('/app/ratingCount', function (req, res) {
            console.log('Query the number of rating elements in db');
            _this.Ratings.retrieveAllratingsCount(res);
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
        this.expressApp.use(express.static(__dirname + '/public'));
    };
    return App;
}());
exports.App = App;
