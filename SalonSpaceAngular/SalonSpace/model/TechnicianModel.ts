import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ITechnicianModel} from '../interfaces/ITechnicianModel';
//import {SkillModel} from './SkillModel';
//import {LanguageModel} from './LanguageModel';
import {RatingModel} from './RatingModel';
import {RegisteredUserModel} from './RegisteredUserModel';
import {SalonModel} from './SalonModel';


let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TechnicianModel {
    public schema:any;
    public model:any;
   // public RegisteredUsers:RegisteredUserModel;
  
    //public Ratings:RatingModel;
    //public Salons:SalonModel;
    

    public constructor() {
        this.createSchema();
        this.createModel();
        
        //this.Ratings = new RatingModel();
        //this.Salons = new SalonModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                registeredUserID: Number,
                technicianID: Number,
                skillList: Array<string>(),
                ratingListID: Array<number>(),
                salonListID: Array<number>(),
                languageList: Array<string>()
            }, {collection: 'technicians'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITechnicianModel>("Technicians", this.schema);
    }

    public retrieveAllTechnicians(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            console.log(itemArray);
            response.json(itemArray) ;
        });
        
    }
    
    public retrieveTechniciansDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            console.log(itemArray);
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