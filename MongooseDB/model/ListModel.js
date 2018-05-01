"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ListModel = /** @class */ (function () {
    function ListModel() {
        this.createSchema();
        this.createModel();
    }
    ListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            name: String,
            description: String,
            listId: Number,
            due: String,
            state: String,
            owner: String
        }, { collection: 'lists' });
    };
    ListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Lists", this.schema);
    };
    ListModel.prototype.retrieveAllLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return ListModel;
}());
exports.ListModel = ListModel;
