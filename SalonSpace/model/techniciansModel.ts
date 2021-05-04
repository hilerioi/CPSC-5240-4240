import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ITechniciansModel} from '../interfaces/itechniciansModel';
import {SkillsModel} from 'skillsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TechniciansModel {
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
                technicianID: Number,
                skillListID: Number,
                ratingListID: Number,
                salonListID: Number,
                languageListID: Number
            }, {collection: 'technicians'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITechniciansModel>("Technicians", this.schema);
    }

    public getAllTechnicians(response:any): any {
        SkillsModel.getSkills()
    }
}
export {TechniciansModel};