interface ITaskModelAngular {
    listId: number;
    tasks: [ {
        description: string;
        taskId: number;
        shared: string;
        status: string;
    }];
}
export default ITaskModelAngular;
