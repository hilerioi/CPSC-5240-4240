"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ClientModel = /** @class */ (function () {
    function ClientModel() {
        this.createSchema();
        this.createModel();
    }
    ClientModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            registeredUserID: number,
            points: number,
            ratingListID: number,
            discountListID: number
        }, { collection: 'clients' });
    };
    ClientModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Clients", this.schema);
    };
    ClientModel.prototype.retreiveAllClients = function (response) {
        var query = this.model.find({});
        query.exec(function (err, clientsArray) {
            response.json(clientsArray);
        });
    };
    ClientModel.prototype.retrieveClientDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, clientArray) {
            response.json(clientArray);
        });
    };
    ClientModel.prototype.retrieveClientCount = function (response) {
        console.log("retrieve Client Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfClients) {
            console.log("numberOfClients: " + numberOfClients);
            response.json(numberOfClients);
        });
    };
    return ClientModel;
}());
exports.ClientModel = ClientModel;
