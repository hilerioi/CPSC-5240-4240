import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IDiscountModel} from '../interfaces/IDiscountModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class DiscountModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                discountID: Number,
                value: Number,
                used: Boolean
            }, {collection: 'discounts'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IDiscountModel>("Discounts", this.schema);
    }

    public retrieveAllDiscounts(response:any): any {
        var query = this.model.find({});
        query.exec( (err, discountsArray) => {
            response.json(discountsArray) ;
        });
        
    }
    
    public retrieveDiscountDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, discount) => {
            response.json(discount);
        });
    }

    public retrieveDiscountCount(response:any): any {
        console.log("retrieve Discount Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfDiscounts) => {
            console.log("numberOfDiscounts: " + numberOfDiscounts);
            response.json(numberOfDiscounts) ;
        });
    }
}
export {DiscountModel};