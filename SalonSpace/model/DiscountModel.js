"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class DiscountModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            discountID: Number,
            value: Number,
            used: Boolean
        }, { collection: 'discounts' });
    }
    createModel() {
        this.model = mongooseConnection.model("Discounts", this.schema);
    }
    retrieveAllDiscounts(response) {
        var query = this.model.find({});
        query.exec((err, discountsArray) => {
            response.json(discountsArray);
        });
    }
    retrieveDiscountDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, discount) => {
            response.json(discount);
        });
    }
    retrieveDiscountCount(response) {
        console.log("retrieve Discount Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfDiscounts) => {
            console.log("numberOfDiscounts: " + numberOfDiscounts);
            response.json(numberOfDiscounts);
        });
    }
}
exports.DiscountModel = DiscountModel;
