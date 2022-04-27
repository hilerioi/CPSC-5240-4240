import Mongoose = require("mongoose");

interface IListModel extends Mongoose.Document {
    name: string;
    description: string;
    listId: string;
    due: string;
    state: string;
    owner: string;
}
export {IListModel};