import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IClientModel} from '../interfaces/IClientModel';
import {RatingModel} from './RatingModel';
import {RegisteredUserModel} from './RegisteredUserModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ClientModel {
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
                points: Number,
                ratingListID: Array<number>(),
                discountListID: Array<number>()
            }, {collection: 'clients'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IClientModel>("Clients", this.schema);
    }

    public retrieveAllClients(response:any): any {
        var query = this.model.find({});
        query.exec( (err, clientsArray) => {
            response.json(clientsArray) ;
        });
        
    }
    
    public retrieveClientDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, client) => {
            response.json(client);
        });
    }

    public retrieveClientCount(response:any): any {
        console.log("retrieve Client Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfClients) => {
            console.log("numberOfClients: " + numberOfClients);
            response.json(numberOfClients) ;
        });
    }
}
export {ClientModel};