import Mongoose = require("mongoose");

interface ISalonModel extends Mongoose.Document {
    salonID: number;
    name: string;
    address: string;
    salonListID: Array<number>;
}
export {ISalonModel};