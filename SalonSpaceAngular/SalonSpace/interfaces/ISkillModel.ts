import Mongoose = require("mongoose");

interface ISkillModel extends Mongoose.Document {
    skillID: number;
    name: string;
    skillListID: Array<number>;
}
export {ISkillModel};