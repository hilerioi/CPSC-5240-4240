import Mongoose = require("mongoose");

interface IRatingsModel extends Mongoose.Document {
    ratingID: number;
    stars: number;
    text: string;
    //ratingListID: Array<number>;
}
export {IRatingsModel};