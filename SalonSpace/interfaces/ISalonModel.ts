import Mongoose = require("mongoose");

interface ISalonModel extends Mongoose.Document {
    salonID: number;
    name: string;
    address: string;
    //salonListID: number;
}
export {ISalonModel};