"use strict";
exports.__esModule = true;
exports.TechnicianModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TechnicianModel = /** @class */ (function () {
    // public RegisteredUsers:RegisteredUserModel;
    //public Ratings:RatingModel;
    //public Salons:SalonModel;
    function TechnicianModel() {
        this.createSchema();
        this.createModel();
        //this.Ratings = new RatingModel();
        //this.Salons = new SalonModel();
    }
    TechnicianModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            technicianID: Number,
            skillList: Array(),
            ratingListID: Array(),
            salonListID: Array(),
            languageList: Array()
        }, { collection: 'technicians' });
    };
    TechnicianModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Technicians", this.schema);
    };
    TechnicianModel.prototype.retrieveAllTechnicians = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            console.log(itemArray);
            response.json(itemArray);
        });
    };
    TechnicianModel.prototype.retrieveTechniciansDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            console.log(itemArray);
            response.json(itemArray);
        });
    };
    TechnicianModel.prototype.retrieveTechnicianCount = function (response) {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfTechnicians) {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians);
        });
    };
    return TechnicianModel;
}());
exports.TechnicianModel = TechnicianModel;
