import Mongoose = require("mongoose");

interface ITechniciansModel extends Mongoose.Document {
    registeredUserID: number;
    technicianID: number;
    skillListID: number;
    ratingListID: number;
    salonListID: number;
    languageListID: number;
}
export {ITechniciansModel};