import * as path from 'path';
import * as express from 'express';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
let MongoClient = mongodb.MongoClient;

//var Q = require('q');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public mongoDBConnection:string = 'mongodb://dbAdmin/test@localhost:3000/classSample';
  public dbConnection: any = null;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
  }

  async openDbConnection() : Promise<void> {
    if (this.dbConnection == null) {
      try {
        this.dbConnection = await MongoClient.connect(this.mongoDBConnection);
        console.log("Connected correctly to MongoDB server.");
      }
      catch(err){
        console.log("Unable to connect to MongodDB server");
      }
    }
  }

  // Configure Express middleware.
  private async middleware(): Promise<void> {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    await this.openDbConnection();
  }

  async accessTransportation(res, payload, api) : Promise<any> {
//    var deferred = Q.defer();
    console.log("db operation: " + api);

    if (this.dbConnection != null) {
      console.log("Using Connection");
      let carCollection = this.dbConnection.collection('carCollection2');        
      let query = payload;
      
      if (api === "query") {
        try {
          let result = await carCollection.find(query);
          return result.toArray();  
        }
        catch(err) {
          console.log("error querying all results.");
        }
      }
      else if (api === "insert") {
        try {
          console.log("inserting payload:" + JSON.stringify(payload));
          let result = await carCollection.insert(payload);
          console.log(`Updated ${result.result.n} documents`);
          return {"result": "document added"};
        }
        catch(err) {
          console.error(`Something went wrong: ${err}`);
          return {"result": "error inserting document"};
        }
      }
      else if (api === "delete") {
        try {
          console.log("deleting payload:" + JSON.stringify(payload));
          let result = await carCollection.deleteOne(payload);
          if (result.result.n == 0){
            res.statusCode = 400;
            return {"result": "record not found"}
          }
          else {
            res.statusCode = 200;
            return {"result": "deleted"};  
          }
        }
        catch(err) {
          res.statusCode = 400;
          return {"result": "error deleting"};
        }
      }
    }
    else {
          console.log("Connection lost");
    }
}

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
    router.get('/all', async (req, res) => {
        const list = await this.accessTransportation(res, {}, "query");
        res.send(list);
    });

    router.post('/add', async (req, res) => {
      let bodyRequest = req.body;
      console.log("payload in body:" + bodyRequest);
      const result = await this.accessTransportation(res, bodyRequest, "insert");
      res.send(result);
    });

    router.delete('/remove', async (req, res) =>{
      let bodyRequest = req.body;
      const result = await this.accessTransportation(res, bodyRequest, "delete");
      res.send(result);
    });

    router.get('/search', async (req, res) => {
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        var msg = 'search for ' + query.var1;
        console.log(msg);
        const list = await this.accessTransportation(res, {speed: query.var1}, "query");
        res.send(list);
    });

    //col1.find({"speed": {$gte: "150"}})
    router.get('/search2', async (req, res) => {
      var urlParts = url.parse(req.url, true);
      var query = urlParts.query;
      var msg = 'search for ' + query.var1;
      console.log(msg);
      const list = this.accessTransportation(res, {speed: {$gte: query.var1}}, "query");
      res.send(list);
  });

    router.get('/vehicle/:vname', (req, res) => {
        var vname = req.params.vname;
        console.log('Query for vehicle name: ' + vname);
        this.accessTransportation(res, {vehicle: vname}, "query").then((list) => {
            res.send(list);
        });	
    });

    router.param('vname', (req, res, next, value) => {
        console.log('The param value is: ' + value);
        next();
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
  }

}

export {App};