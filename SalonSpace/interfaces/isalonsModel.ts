import Mongoose = require("mongoose");

interface ISalonsModel extends Mongoose.Document {
    salonID: number;
    name: string;
    address: string;
    salonListID: Array<number>;
}
export {ISalonsModel};