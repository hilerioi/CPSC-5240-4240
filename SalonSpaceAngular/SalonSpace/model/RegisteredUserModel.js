"use strict";
exports.__esModule = true;
exports.RegisteredUserModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RegisteredUserModel = /** @class */ (function () {
    function RegisteredUserModel() {
        this.createSchema();
        this.createModel();
    }
    RegisteredUserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            email: String,
            firstName: String,
            lastName: String,
            password: String,
            loginStatus: Boolean
        }, { collection: 'registeredUsers' });
    };
    RegisteredUserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("RegisteredUsers", this.schema);
    };
    RegisteredUserModel.prototype.retrieveAllRegisteredUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RegisteredUserModel.prototype.retrieveRegisteredUsersDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RegisteredUserModel.prototype.retrieveAllRegisteredUserCount = function (response) {
        console.log("retrieve RegisteredUsers Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfRegisteredUsers) {
            console.log("numberOfRegisteredUsers: " + numberOfRegisteredUsers);
            response.json(numberOfRegisteredUsers);
        });
    };
    return RegisteredUserModel;
}());
exports.RegisteredUserModel = RegisteredUserModel;
