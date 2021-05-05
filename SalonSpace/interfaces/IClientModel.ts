import Mongoose = require("mongoose");

interface IClientModel extends Mongoose.Document {
    registeredUserID: number;
    points: number;
    ratingListID: number;
    discountListID: number;
}
export {IClientModel};