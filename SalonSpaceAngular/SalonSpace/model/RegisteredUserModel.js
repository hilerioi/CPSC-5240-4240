"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class RegisteredUserModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            email: String,
            firstName: String,
            lastName: String,
            password: String,
            loginStatus: Boolean
        }, { collection: 'registeredUsers' });
    }
    createModel() {
        this.model = mongooseConnection.model("RegisteredUsers", this.schema);
    }
    retrieveAllRegisteredUsers(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveRegisteredUsersDetails(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveAllRegisteredUserCount(response) {
        console.log("retrieve RegisteredUsers Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfRegisteredUsers) => {
            console.log("numberOfRegisteredUsers: " + numberOfRegisteredUsers);
            response.json(numberOfRegisteredUsers);
        });
    }
}
exports.RegisteredUserModel = RegisteredUserModel;
