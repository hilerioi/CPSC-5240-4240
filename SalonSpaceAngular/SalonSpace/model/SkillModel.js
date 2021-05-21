"use strict";
exports.__esModule = true;
exports.SkillModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var SkillModel = /** @class */ (function () {
    function SkillModel() {
        this.createSchema();
        this.createModel();
    }
    SkillModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            skillID: Number,
            name: String,
            skillListID: Array()
        }, { collection: 'skills' });
    };
    SkillModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Skills", this.schema);
    };
    SkillModel.prototype.retreiveAllSkills = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    SkillModel.prototype.retreiveSkillsDetails = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    SkillModel.prototype.retrieveSkillCount = function (response) {
        console.log("retrieve Skill Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec(function (err, numberOfSkills) {
            console.log("numberOfSkills: " + numberOfSkills);
            response.json(numberOfSkills);
        });
    };
    return SkillModel;
}());
exports.SkillModel = SkillModel;
