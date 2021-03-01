"use strict";
exports.__esModule = true;
exports.TaskModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TaskModel = /** @class */ (function () {
    function TaskModel() {
        this.createSchema();
        this.createModel();
    }
    TaskModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            listId: Number,
            tasks: [
                {
                    description: String,
                    taskId: Number,
                    shared: String,
                    status: String
                }
            ]
        }, { collection: 'tasks' });
    };
    TaskModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Task", this.schema);
    };
    TaskModel.prototype.retrieveTasksDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    TaskModel.prototype.retrieveTasksCount = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, innerTaskList) {
            if (err) {
                console.log('error retrieving count');
            }
            else {
                if (innerTaskList == null) {
                    response.status(404);
                    response.json('{count: -1}');
                }
                else {
                    console.log('number of tasks: ' + innerTaskList.tasks.length);
                    response.json('{count:' + innerTaskList.tasks.length + '}');
                }
            }
        });
    };
    return TaskModel;
}());
exports.TaskModel = TaskModel;
