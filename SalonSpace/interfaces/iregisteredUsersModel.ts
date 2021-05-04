import Mongoose = require("mongoose");

interface IRegisteredUsersModel extends Mongoose.Document {
    registeredUserID: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    loginStatus: boolean;
}
export {IRegisteredUsersModel};