"use strict";
exports.__esModule = true;
exports.DiscountModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var DiscountModel = /** @class */ (function () {
    function DiscountModel() {
        this.createSchema();
        this.createModel();
    }
    DiscountModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            discountID: Number,
            value: Number,
            used: Boolean
        }, { collection: 'discounts' });
    };
    DiscountModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Discounts", this.schema);
    };
    DiscountModel.prototype.retrieveAllDiscounts = function (response) {
        var query = this.model.find({});
        query.exec(function (err, discountsArray) {
            response.json(discountsArray);
        });
    };
    DiscountModel.prototype.retrieveDiscountDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, discount) {
            response.json(discount);
        });
    };
    DiscountModel.prototype.retrieveDiscountCount = function (response) {
        console.log("retrieve Discount Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfDiscounts) {
            console.log("numberOfDiscounts: " + numberOfDiscounts);
            response.json(numberOfDiscounts);
        });
    };
    return DiscountModel;
}());
exports.DiscountModel = DiscountModel;
