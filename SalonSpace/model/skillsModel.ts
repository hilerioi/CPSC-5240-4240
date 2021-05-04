import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ISkillsModel} from '../interfaces/iskillsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class SkillsModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                skillID: Number,
                name: String,
                skillListID: Array<Number>
            }, {collection: 'skills'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISkillsModel>("Skills", this.schema);
    }

    public getSkills(response:any, filter:Object) {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {SkillsModel};