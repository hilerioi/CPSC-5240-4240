import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ISkillModel} from '../interfaces/ISkillModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class SkillModel {
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
                skillListID: Array<Number>()
            }, {collection: 'skills'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ISkillModel>("Skills", this.schema);
    }

    public retreiveAllSkills(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }

    public retreiveSkillsDetails(response:any, filter:Object):any {
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveSkillCount(response:any): any {
        console.log("retrieve Skill Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfSkills) => {
            console.log("numberOfSkills: " + numberOfSkills);
            response.json(numberOfSkills) ;
        });
    }
}
export {SkillModel};