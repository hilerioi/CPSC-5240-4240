"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
let server = new App_1.App().expressApp;
server.listen(8080);
