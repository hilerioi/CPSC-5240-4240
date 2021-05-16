import Mongoose = require("mongoose");

interface ITechnicianModel extends Mongoose.Document {
    registeredUserID: number;
    technicianID: number;
    skillList: Array<string>;
    ratingListID: number;
    salonListID: number;
    languageList: Array<string>;
}
export {ITechnicianModel};