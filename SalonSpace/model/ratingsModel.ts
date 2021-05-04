import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRatingsModel} from '../interfaces/iratingsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RatingsModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                ratingID: Number,
                stars: Number,
                text: String,
                ratingListID: Array<Number>
            }, {collection: 'ratings'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRatingsModel>("Skills", this.schema);
    }

    public getRatings(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {RatingsModel};