"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = 8080;
var server = new App_1.App().express;
server.listen(port);
console.log("server running in port " + port);
