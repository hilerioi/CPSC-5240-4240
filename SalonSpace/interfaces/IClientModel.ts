import Mongoose = require("mongoose");

interface IClientModel extends Mongoose.Document {
    registeredUserID: number;
    points: number;
    ratingListID: Array<number>;
    discountListID: Array<number>;
}
export {IClientModel};