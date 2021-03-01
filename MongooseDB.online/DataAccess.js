"use strict";
exports.__esModule = true;
exports.DataAccess = void 0;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        //DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    //    static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/toDoSample?authSource=admin';
    //    static DB_CONNECTION_STRING:string = 'mongodb+srv://test:test@cluster0.wvyas.azure.mongodb.net/todoappsu3?retryWrites=true&w=majority&authSource=admin';
    DataAccess.DB_CONNECTION_STRING = 'mongodb+srv://test:dbtest@cluster0.wvyas.azure.mongodb.net/todoappsu3?retryWrites=true&w=majority';
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
