import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRatingsModel} from '../interfaces/IRatingModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RatingModel {
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
                ratingListID: Array<Number>()
            }, {collection: 'ratings'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRatingsModel>("Ratings", this.schema);
    }

    public retreiveAllRatings(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    public retreiveRatingsDetails(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAllratingsCount(response:any): any {
        console.log("retrieve Ratings Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfRatings) => {
            console.log("numberOfRatings: " + numberOfRatings);
            response.json(numberOfRatings) ;
        });
    }
}
export {RatingModel};