"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class TechnicianModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            registeredUserID: Number,
            technicianID: Number,
            skillList: Array(),
            ratingListID: Array(),
            salonListID: Array(),
            languageList: Array()
        }, { collection: 'technicians' });
    }
    createModel() {
        this.model = mongooseConnection.model("Technicians", this.schema);
    }
    retrieveAllTechnicians(response) {
        var query = this.model.find({});
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveTechniciansDetails(response, filter) {
        var query = this.model.findOne({ technicianID: '1' });
        query.exec((err, itemArray) => {
            response.json(itemArray);
        });
    }
    retrieveTechnicianCount(response) {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec((err, numberOfTechnicians) => {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians);
        });
    }
}
exports.TechnicianModel = TechnicianModel;
