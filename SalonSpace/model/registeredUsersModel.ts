import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRegisteredUsersModel} from '../interfaces/iregisteredUsersModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RegisteredUsersModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                registeredUserID: Number,
                email: String,
                firstName: String,
                lastName: String,
                password: String,
                loginStatus: Boolean
            }, {collection: 'registeredUsers'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRegisteredUsersModel>("RegisteredUsers", this.schema);
    }
}
export {RegisteredUsersModel};