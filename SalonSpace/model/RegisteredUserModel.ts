import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRegisteredUserModel} from '../interfaces/IRegisteredUserModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RegisteredUserModel {
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
        this.model = mongooseConnection.model<IRegisteredUserModel>("RegisteredUsers", this.schema);
    }

    public retrieveAllRegisteredUsers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    public retrieveRegisteredUsersDetails(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }


    public retrieveAllRegisteredUserCount(response:any): any {
        console.log("retrieve RegisteredUsers Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfRegisteredUsers) => {
            console.log("numberOfRegisteredUsers: " + numberOfRegisteredUsers);
            response.json(numberOfRegisteredUsers) ;
        });
    }
}
export {RegisteredUserModel};