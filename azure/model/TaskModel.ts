import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {ITaskModel} from '../interfaces/ITaskModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TaskModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                listId: Number,
                tasks: [ {
                description: String,
                taskId: Number,
                shared: String,
                status: String
                }]
            }, {collection: 'tasks'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITaskModel>("Task", this.schema);
    }
    
    public retrieveTasksDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public retrieveTasksCount(response:any, filter:Object) {
        var query = this.model.find(filter).select('tasks').count();
        query.exec( (err, numberOfTasks) => {
            console.log('number of tasks: ' + numberOfTasks);
            response.json(numberOfTasks);
        });
    }

}
export {TaskModel};