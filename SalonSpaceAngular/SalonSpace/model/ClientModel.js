"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class ClientModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            points: Number,
            ratingListID: Array(),
            discountListID: Array()
        }, { collection: 'clients' });
    }
    createModel() {
        this.model = mongooseConnection.model("Clients", this.schema);
    }
    retrieveAllClients(response) {
        var query = this.model.find({});
        query.exec((err, clientsArray) => {
            response.json(clientsArray);
        });
    }
    retrieveClientDetails(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, client) => {
            response.json(client);
        });
    }
    retrieveClientCount(response) {
        console.log("retrieve Client Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfClients) => {
            console.log("numberOfClients: " + numberOfClients);
            response.json(numberOfClients);
        });
    }
}
exports.ClientModel = ClientModel;
