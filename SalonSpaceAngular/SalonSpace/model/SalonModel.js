"use strict";
exports.__esModule = true;
exports.SalonModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var SalonModel = /** @class */ (function () {
    function SalonModel() {
        this.createSchema();
        this.createModel();
    }
    SalonModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            salonID: Number,
            name: String,
            address: String,
            salonListID: Array()
        }, { collection: 'salons' });
    };
    SalonModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Salons", this.schema);
    };
    SalonModel.prototype.retrieveAllSalons = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    SalonModel.prototype.retrieveSalonDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    SalonModel.prototype.retrieveSalonCount = function (response) {
        console.log("retrieve Salon Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfSalons) {
            console.log("numberOfSalons: " + numberOfSalons);
            response.json(numberOfSalons);
        });
    };
    return SalonModel;
}());
exports.SalonModel = SalonModel;
