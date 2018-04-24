import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
var MongoClient = require('mongodb').MongoClient;
var Q = require('q');

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
    this.openDbConnection();
    this.routes();
  }

  public openDbConnection(): void {
    if (this.dbConnection == null) {
        MongoClient.connect(this.mongoDBConnection, (err, dbConnection) => {
            this.dbConnection = dbConnection;
            console.log("Connected correctly to MongoDB server.");
        });
    }
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  public accessTransportation(res, query): any  {
    var deferred = Q.defer();
    console.log("query Transportation");

    if (this.dbConnection != null) {
        console.log("Using Connection")
        this.dbConnection.collection('carCollection', (err, nCollection) => {
            nCollection.find(query, (err, cursor) => {
                cursor.toArray( (err, itemArray) => {
                    var list = "<h1>Request</h1>";
                    for (var i = 0; i < itemArray.length; i++) {
                        list += "<h3>" + itemArray[i].vehicle + " : " + itemArray[i].speed + "</h3>";
                    }
                    return deferred.resolve(list);
                });
            });
        });
    }
    else {
        console.log("Connection lost");
    }

    return deferred.promise;
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
    router.get('/all', (req, res) => {
          this.accessTransportation(res, {}).then(
            (list) => { res.send(list); });
    });

    router.get('/search', (req, res) => {
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        var msg = 'search for ' + query.var1;
        console.log(msg);
        this.accessTransportation(res, {speed: query.var1}).then((list) =>{
            res.send(list);
        });
    });

    router.get('/vehicle/:vname', (req, res) => {
        var vname = req.param('vname');
        console.log('Query for vehicle name: ' + vname);
        this.accessTransportation(res, {vehicle: vname}).then((list) => {
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