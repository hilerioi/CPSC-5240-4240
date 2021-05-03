import Mongoose = require("mongoose");

interface ITaskModel extends Mongoose.Document {
    listId: number;
    tasks: [ {
        description: string;
        taskId: number;
        shared: string;
        status: string;
    }];
}
export {ITaskModel};
