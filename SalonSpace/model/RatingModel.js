"use strict";
exports.__esModule = true;
exports.RatingModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RatingModel = /** @class */ (function () {
    function RatingModel() {
        this.createSchema();
        this.createModel();
    }
    RatingModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            ratingID: Number,
            stars: Number,
            text: String,
            ratingListID: Array()
        }, { collection: 'ratings' });
    };
    RatingModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Ratings", this.schema);
    };
    RatingModel.prototype.retreiveAllRatings = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RatingModel.prototype.retreiveRatingsDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RatingModel.prototype.retrieveAllratingsCount = function (response) {
        console.log("retrieve Ratings Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfRatings) {
            console.log("numberOfRatings: " + numberOfRatings);
            response.json(numberOfRatings);
        });
    };
    return RatingModel;
}());
exports.RatingModel = RatingModel;
