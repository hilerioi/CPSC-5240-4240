import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ISalonsModel} from '../interfaces/isalonsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class SalonsModel {
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
                salonListID: Array<Number>
            }, {collection: 'salons'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISalonsModel>("Salons", this.schema);
    }

    public getSalons(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {SalonsModel};