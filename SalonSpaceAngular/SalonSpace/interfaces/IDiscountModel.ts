import Mongoose = require("mongoose");

interface IDiscountModel extends Mongoose.Document {
    discountID: number;
    value: number;
    used: boolean;
}
export {IDiscountModel};