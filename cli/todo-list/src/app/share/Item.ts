export default class Item {
    name: string;
    tasks: [{
        description: string;
        id: string;
        shared: string;
        status: string;
    }];
}