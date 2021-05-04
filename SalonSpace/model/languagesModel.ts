import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ILanguagesModel} from '../interfaces/ilanguagesModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class LanguagesModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                languateID: Number,
                name: String,
                languageListID: Array<Number>
            }, {collection: 'languages'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ILanguagesModel>("Languages", this.schema);
    }

    public getLanguages(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {LanguagesModel};