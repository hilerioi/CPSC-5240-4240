import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ISalonsModel} from '../interfaces/ISalonModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class SalonModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                salonID: Number,
                name: String,
                salonListID: Array<Number>()
            }, {collection: 'salons'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISalonsModel>("Salons", this.schema);
    }

    public retreiveAllSalons(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    public retreiveSalonDetails(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveSalonCount(response:any): any {
        console.log("retrieve Salon Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfSalons) => {
            console.log("numberOfSalons: " + numberOfSalons);
            response.json(numberOfSalons) ;
        });
    }
}
export {SalonModel};