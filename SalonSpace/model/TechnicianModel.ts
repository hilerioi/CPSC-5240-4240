import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ITechnicianModel} from '../interfaces/ITechnicianModel';
import {SkillModel} from './SkillModel';
import {LanguageModel} from './LanguageModel';
import {RatingModel} from './RatingModel';
import {RegisteredUserModel} from './RegisteredUserModel';
import {SalonModel} from './SalonModel';


let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TechnicianModel {
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
                technicianId: Number,
                skillListID: Number,
                ratingListID: Number,
                salonListID: Number,
                languageListID: Number
            }, {collection: 'technicians'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITechnicianModel>("Technicians", this.schema);
    }

    public retreiveAllTechnicians(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
        
    }
    
    public retrieveTechniciansDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
    

    public retrieveTechnicianCount(response:any): any {
        console.log("retrieve Technician Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numberOfTechnicians) => {
            console.log("numberOfTechnicians: " + numberOfTechnicians);
            response.json(numberOfTechnicians) ;
        });
    }
}
export {TechnicianModel};