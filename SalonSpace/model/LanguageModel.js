"use strict";
exports.__esModule = true;
exports.LanguageModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var LanguageModel = /** @class */ (function () {
    function LanguageModel() {
        this.createSchema();
        this.createModel();
    }
    LanguageModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            languateID: Number,
            name: String,
            languageListID: Array()
        }, { collection: 'languages' });
    };
    LanguageModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Languages", this.schema);
    };
    LanguageModel.prototype.retreiveAllLanguages = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    LanguageModel.prototype.retreiveLanguagesDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    LanguageModel.prototype.retrieveAllLanguageCount = function (response) {
        console.log("retrieve Languages Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfLanguages) {
            console.log("numberOfLanguages: " + numberOfLanguages);
            response.json(numberOfLanguages);
        });
    };
    return LanguageModel;
}());
exports.LanguageModel = LanguageModel;
