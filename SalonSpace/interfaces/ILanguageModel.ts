import Mongoose = require("mongoose");

interface ILanguagesModel extends Mongoose.Document {
    languageID: number;
    name: string;
    languageListID: Array<number>;
}
export {ILanguagesModel};