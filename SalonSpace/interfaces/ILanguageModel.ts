import Mongoose = require("mongoose");

interface ILanguageModel extends Mongoose.Document {
    languageID: number;
    name: string;
    languageListID: Array<number>;
}
export {ILanguageModel};