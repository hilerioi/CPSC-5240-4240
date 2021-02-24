import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import { STATUS_CODES } from 'http';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    
    // router.get('/', (req, res, next) => {
    //   res.json({
    //     message: 'Hello World!'
    //   });
    // });

    router.get('/one', (req, res, next) => {
        res.send('request one');
    });

    router.post('/two', (req, res, next) => {
      let postBody:any = req.body;
      console.log("received post data:" + req.body);
      let oValue:any = JSON.parse(postBody);
      console.log('fName:' + oValue.fName);
      console.log('lName:' + oValue.lName);
      console.log('profession:' + oValue.profession);
      res.statusCode = 200;
      res.statusMessage = "Successful Post";
    });

    router.get('/add', (req, res, next) => {
        let urlParts:any = url.parse(req.url, true);
        let query:any = urlParts.query;

        console.log('var1:' + query.var1);
        console.log('var2:' + query.var2);

         let value1: number = parseInt(query.var1);
         let value2: number = parseInt(query.var2);
         let sum: number = value1 + value2;
        
        //var sum = query.var1 + query.var2;
        var msg = 'addition of ' + query.var1 + ' plus ' + query.var2 + ' equals ' + sum;

        console.log(msg);

        res.send(msg);
    });
    router.get('/add2/:var1/:var2', (req, res, next) => {
       let value1: number = parseInt(req.params.var1);
       let value2: number = parseInt(req.params.var2);
       let sum: number = value1 + value2;
      
      //var sum = query.var1 + query.var2;
      var msg = 'addition of ' + value1 + ' plus ' + value2 + ' equals ' + sum;

      console.log(msg);

      res.send(msg);
  });


    let fname2;

    router.get('/name/:fname', (req, res, next) => {
        let name:string;

	    console.log(':fname = ' + req.params.fname);

        if (req.params.fname === 'israelh') {
            name = fname2 + ' hilerio';
        }
        else {
            name = fname2 + ' world';
        }

        console.log("Your name is: " + name);

        res.send("Your name is: "  + name);
    });

    router.param('fname', (req, res, next, value) => {
        console.log('The param value is: ' + value);

        fname2 = value + "-ABCD";
        console.log('fname2:' + fname2);

        next();
    });

    this.express.use('/', router);

    this.express.use('/data', express.static(__dirname+'/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/pages'));

  }

}

export {App};
