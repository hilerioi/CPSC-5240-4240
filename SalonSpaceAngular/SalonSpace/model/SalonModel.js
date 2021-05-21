"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class SalonModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            salonID: Number,
            name: String,
            address: String,
            salonListID: Array()
        }, { collection: 'salons' });
    }
    createModel() {
        this.model = mongooseConnection.model("Salons", this.schema);
    }
    retrieveAllSalons(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveSalonDetails(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveSalonCount(response) {
        console.log("retrieve Salon Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfSalons) => {
            console.log("numberOfSalons: " + numberOfSalons);
            response.json(numberOfSalons);
        });
    }
}
exports.SalonModel = SalonModel;
