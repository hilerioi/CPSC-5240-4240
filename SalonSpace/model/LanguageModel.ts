import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ILanguageModel} from '../interfaces/ILanguageModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class LanguageModel {
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
                languageListID: Array<Number>()
            }, {collection: 'languages'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ILanguageModel>("Languages", this.schema);
    }

    public retreiveAllLanguages(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    public retreiveLanguagesDetails(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveAllLanguageCount(response:any): any {
        console.log("retrieve Languages Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfLanguages) => {
            console.log("numberOfLanguages: " + numberOfLanguages);
            response.json(numberOfLanguages) ;
        });
    }
}
export {LanguageModel};