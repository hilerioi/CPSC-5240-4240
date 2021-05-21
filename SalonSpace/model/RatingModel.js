"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class RatingModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            ratingID: Number,
            stars: Number,
            text: String,
        }, { collection: 'ratings' });
    }
    createModel() {
        this.model = mongooseConnection.model("Ratings", this.schema);
    }
    retrieveAllRatings(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveRatingsDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, rating) => {
            response.json(rating);
        });
    }
    retrieveAllratingsCount(response) {
        console.log("retrieve Ratings Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfRatings) => {
            console.log("numberOfRatings: " + numberOfRatings);
            response.json(numberOfRatings);
        });
    }
}
exports.RatingModel = RatingModel;
