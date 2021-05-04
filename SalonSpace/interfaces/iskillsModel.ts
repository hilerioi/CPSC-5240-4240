import Mongoose = require("mongoose");

interface ISkillsModel extends Mongoose.Document {
    skillID: number;
    name: string;
    skillListID: Array<number>;
}
export {ISkillsModel};