import Mongoose = require("mongoose");

interface IListModel extends Mongoose.Document {
    name: string;
    description: string;
    listId: number;
    due: string;
    state: string;
    owner: string;
}
export {IListModel};